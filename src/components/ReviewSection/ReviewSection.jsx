import './ReviewSection.css';
import { useTranslation } from "react-i18next";

function ReviewSection() {
    const { t } = useTranslation();
    return(
        <section className="review-section">
            <h3>{t('reviewSection.subtitle')}</h3>
            <h2>{t('reviewSection.title')}</h2>
            <div className='review-section-content'>
                <div className='review-section-content-item'>
                    <p className='review-section-content-item-paragraph'>"{t('reviewSection.review1.quote')}"</p>
                    <div className='review-section-content-item-author'>
                        <div className='review-section-content-item-img author1'></div>
                        <div className='review-section-content-item-author-data'>
                            <h4 className='review-section-content-item-name'>{t('reviewSection.review1.name')}</h4>
                            <h5 className='review-section-content-item-position'>{t('reviewSection.review1.position')}</h5>
                        </div>
                    </div>
                </div>
                <div className='review-section-content-item'>
                    <p className='review-section-content-item-paragraph'>"{t('reviewSection.review2.quote')}"</p>
                    <div className='review-section-content-item-author'>
                        <div className='review-section-content-item-img author2'></div>
                        <div className='review-section-content-item-author-data'>
                            <h4 className='review-section-content-item-name'>{t('reviewSection.review2.name')}</h4>
                            <h5 className='review-section-content-item-position'>{t('reviewSection.review2.position')}</h5>
                        </div>
                    </div>
                </div>
                <div className='review-section-content-item'>
                    <p className='review-section-content-item-paragraph'>"{t('reviewSection.review3.quote')}"</p>
                    <div className='review-section-content-item-author'>
                        <div className='review-section-content-item-img author3'></div>
                        <div className='review-section-content-item-author-data'>
                            <h4 className='review-section-content-item-name'>{t('reviewSection.review3.name')}</h4>
                            <h5 className='review-section-content-item-position'>{t('reviewSection.review3.position')}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewSection;