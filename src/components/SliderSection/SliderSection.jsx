import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./SliderSection.css";

import slider1 from "../../assets/SliderSection_assets/slider1.jpg";
import slider2 from "../../assets/SliderSection_assets/slider2.jpg";
import slider3 from "../../assets/SliderSection_assets/slider3.jpg";
import slider4 from "../../assets/SliderSection_assets/slider4.jpg";
import slider5 from "../../assets/SliderSection_assets/slider5.jpg";
import slider6 from "../../assets/SliderSection_assets/slider6.jpg";

const slides = [
    { id: "slide-1", image: slider1, alt: "Игроки на корте во время ралли" },
    { id: "slide-2", image: slider2, alt: "Группа друзей перед матчем" },
    { id: "slide-3", image: slider3, alt: "Подача на падел-корте" },
    { id: "slide-4", image: slider4, alt: "Фокус на мяче и ракетке" },
    { id: "slide-5", image: slider5, alt: "Спортсмены на тренировке" },
    { id: "slide-6", image: slider6, alt: "Командный настрой после игры" },
    { id: "slide-7", image: slider4, alt: "Фокус на мяче и ракетке" },
    { id: "slide-8", image: slider5, alt: "Спортсмены на тренировке" },
    { id: "slide-9", image: slider6, alt: "Командный настрой после игры" },
];

const MOBILE_BREAKPOINT = 768;
const DESKTOP_PEEK = 80;
const MOBILE_PEEK = 48;
const DESKTOP_GAP = 36;
const MOBILE_GAP = 18;
const DESKTOP_CARD_WIDTH = { min: 320, max: 420 };
const MOBILE_CARD_WIDTH = { min: 240, max: 320 };
const DRAG_BASE_THRESHOLD = 60;
const AUTO_INTERVAL = 3000;

function SliderSection() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);
    const [isMobileLayout, setIsMobileLayout] = useState(false);

    const viewportRef = useRef(null);
    const dragState = useRef({ startX: 0, deltaX: 0 });
    const slidesCount = slides.length;
    const visibleSlides = isMobileLayout ? 1 : 2;
    const sliderGap = isMobileLayout ? MOBILE_GAP : DESKTOP_GAP;
    const peekWidth = isMobileLayout ? MOBILE_PEEK : DESKTOP_PEEK;
    const framesCount = Math.max(1, slidesCount - visibleSlides + 1);
    const hasMultipleFrames = framesCount > 1;
    const shouldPause = isHovered || isDragging || !hasMultipleFrames;

    useEffect(() => {
        const updateMetrics = () => {
            if (viewportRef.current) {
                setViewportWidth(viewportRef.current.offsetWidth);
            }
            setIsMobileLayout(window.innerWidth <= MOBILE_BREAKPOINT);
        };

        updateMetrics();
        window.addEventListener("resize", updateMetrics);
        return () => window.removeEventListener("resize", updateMetrics);
    }, []);

    useEffect(() => {
        setCurrentIndex((prev) => Math.min(prev, framesCount - 1));
    }, [framesCount]);

    const slideWidth = useMemo(() => {
        if (!viewportWidth) {
            return 0;
        }

        const numerator =
            viewportWidth - visibleSlides * sliderGap - peekWidth + sliderGap;

        const rawWidth = numerator / visibleSlides;
        const { min, max } = isMobileLayout
            ? MOBILE_CARD_WIDTH
            : DESKTOP_CARD_WIDTH;

        const safeWidth = Math.max(0, rawWidth);

        if (safeWidth < min) {
            return safeWidth;
        }

        return Math.min(max, safeWidth);
    }, [viewportWidth, visibleSlides, sliderGap, peekWidth, isMobileLayout]);

    const trackOffsetValue = -(slideWidth + sliderGap) * currentIndex + dragOffset;
    const trackOffset = `translateX(${trackOffsetValue}px)`;

    const goToNext = useCallback(() => {
        if (!hasMultipleFrames) return;
        setCurrentIndex((prev) => (prev + 1) % framesCount);
    }, [framesCount, hasMultipleFrames]);

    const goToPrev = useCallback(() => {
        if (!hasMultipleFrames) return;
        setCurrentIndex((prev) => (prev - 1 + framesCount) % framesCount);
    }, [framesCount, hasMultipleFrames]);

    useEffect(() => {
        if (shouldPause) {
            return;
        }

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % framesCount);
        }, AUTO_INTERVAL);

        return () => clearInterval(timer);
    }, [shouldPause, framesCount]);

    const handlePointerDown = useCallback((event) => {
        if (!hasMultipleFrames) return;

        event.preventDefault();
        setIsDragging(true);
        dragState.current.startX = event.clientX;
        dragState.current.deltaX = 0;
        setDragOffset(0);
        event.currentTarget.setPointerCapture?.(event.pointerId);
    }, [hasMultipleFrames]);

    const handlePointerMove = useCallback((event) => {
        if (!isDragging) return;

        const diff = event.clientX - dragState.current.startX;
        dragState.current.deltaX = diff;
        setDragOffset(diff);
    }, [isDragging]);

    const finishDrag = useCallback(() => {
        if (!isDragging) return;

        const { deltaX } = dragState.current;
        const threshold = Math.max(DRAG_BASE_THRESHOLD, slideWidth * 0.15);

        if (Math.abs(deltaX) > threshold) {
            if (deltaX < 0) {
                goToNext();
            } else {
                goToPrev();
            }
        }

        setIsDragging(false);
        setDragOffset(0);
        dragState.current = { startX: 0, deltaX: 0 };
    }, [goToNext, goToPrev, isDragging, slideWidth]);

    useEffect(() => {
        window.addEventListener("pointerup", finishDrag);
        window.addEventListener("pointercancel", finishDrag);

        return () => {
            window.removeEventListener("pointerup", finishDrag);
            window.removeEventListener("pointercancel", finishDrag);
        };
    }, [finishDrag]);

    return (
        <section className="slider-section">
            <div className="slider-section-text">
                <h2 className="slider-section-title">{t("sliderSection.title")}</h2>
                <p className="slider-section-description">{t("sliderSection.description")}</p>
            </div>

            <div className="slider-section-content">
                <div
                    className="slider-wrapper"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className="slider-viewport"
                        ref={viewportRef}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                    >
                        <div
                            className={`slider-track ${isDragging ? "dragging" : ""}`}
                            style={{
                                transform: trackOffset,
                                gap: `${sliderGap}px`,
                            }}
                        >
                            {slides.map((slide) => (
                                <div
                                    className="slider-slide"
                                    key={slide.id}
                                    style={{
                                        width: slideWidth ? `${slideWidth}px` : undefined,
                                    }}
                                >
                                    <img src={slide.image} alt={slide.alt} draggable="false" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="slider-dots" aria-label="Навигация по слайдам">
                        {Array.from({ length: framesCount }).map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                type="button"
                                className={`slider-dot ${index === currentIndex ? "active" : ""}`}
                                aria-label={`Кадр ${index + 1}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SliderSection;