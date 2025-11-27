import "./FollowUsSection.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import img1 from "../../assets/FollowUsSection_assets/img1.jpg";
import img2 from "../../assets/FollowUsSection_assets/img2.jpg";
import img3 from "../../assets/FollowUsSection_assets/img3.png";
import img4 from "../../assets/FollowUsSection_assets/img4.jpg";
import img5 from "../../assets/FollowUsSection_assets/img5.png";
import img6 from "../../assets/FollowUsSection_assets/img6.jpg";
import img7 from "../../assets/FollowUsSection_assets/img1.jpg";
import img8 from "../../assets/FollowUsSection_assets/img2.jpg";
import img9 from "../../assets/FollowUsSection_assets/img3.png";
import img10 from "../../assets/FollowUsSection_assets/img4.jpg";
import img11 from "../../assets/FollowUsSection_assets/img5.png";
import img12 from "../../assets/FollowUsSection_assets/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
const DRAG_BASE_THRESHOLD = 40;
const SLIDE_WIDTH = 240;
const SLIDE_GAP = 16;

function FollowUsSection() {
    const { t } = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);

    const viewportRef = useRef(null);
    const dragState = useRef({ startX: 0, deltaX: 0 });
    const slidesCount = images.length;

    useEffect(() => {
        const updateWidth = () => {
            if (viewportRef.current) {
                setViewportWidth(viewportRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const step = SLIDE_WIDTH + SLIDE_GAP;

    const visibleSlides = useMemo(() => {
        if (!viewportWidth) return 1;
        return Math.max(1, Math.floor((viewportWidth + SLIDE_GAP) / step));
    }, [viewportWidth, step]);

    const maxIndex = useMemo(
        () => Math.max(0, slidesCount - visibleSlides),
        [slidesCount, visibleSlides]
    );

    const safeIndex = useMemo(
        () => Math.min(Math.max(currentIndex, 0), maxIndex),
        [currentIndex, maxIndex]
    );

    const goNext = useCallback(() => {
        if (!slidesCount) return;
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex, slidesCount]);

    const goPrev = useCallback(() => {
        if (!slidesCount) return;
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex, slidesCount]);

    const handlePointerDown = useCallback((event) => {
        event.preventDefault();
        setIsDragging(true);
        dragState.current.startX = event.clientX;
        dragState.current.deltaX = 0;
        setDragOffset(0);
        event.currentTarget.setPointerCapture?.(event.pointerId);
    }, []);

    const handlePointerMove = useCallback(
        (event) => {
            if (!isDragging) return;
            const diff = event.clientX - dragState.current.startX;
            dragState.current.deltaX = diff;
            setDragOffset(diff);
        },
        [isDragging]
    );

    const handlePointerUp = useCallback(() => {
        if (!isDragging) return;

        const { deltaX } = dragState.current;
        const threshold = Math.max(DRAG_BASE_THRESHOLD, step * 0.15);

        if (Math.abs(deltaX) > threshold) {
            if (deltaX < 0) {
                goNext();
            } else {
                goPrev();
            }
        }

        setIsDragging(false);
        setDragOffset(0);
        dragState.current = { startX: 0, deltaX: 0 };
    }, [goNext, goPrev, isDragging, step]);

    const trackStyle = {
        transform: `translateX(${-(safeIndex * (SLIDE_WIDTH + SLIDE_GAP)) + dragOffset}px)`,
    };

    return (
        <section className="follow-us-section">
            <div className="follow-us-section-content">
                <div className="follow-us-section-content-text">
                    <p>{t("followUsSection.content.subtitle")}</p>
                    <h2>
                        {t("followUsSection.content.title")}{" "}
                        <span>{t("followUsSection.content.titleSpan")}</span>
                    </h2>
                </div>

                <div className="follow-us-section-btns-container">
                    <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Предыдущее фото"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                        >
                            <path
                                d="M12 16.75L4 8.75L12 0.75"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={goNext}
                        aria-label="Следующее фото"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                        >
                            <path
                                d="M4 16.75L12 8.75L4 0.75"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className="follow-us-section-img-container"
                ref={viewportRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                <div className={`follow-us-track ${isDragging ? "dragging" : ""}`} style={trackStyle}>
                    {images.map((src, index) => (
                        <div className="follow-us-slide" key={`follow-img-${index}`}>
                            <img src={src} alt={`Beatclub ${index + 1}`} draggable="false" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FollowUsSection;