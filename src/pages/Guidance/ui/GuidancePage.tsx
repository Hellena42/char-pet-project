import { GuidanceIcons } from "@/assets/images/guidance"
import { GUIDANCE_DATA } from "../model/guidance.data";
import { AppRoutes } from "@/shared/constants";
import { NavLink } from "react-router-dom";
import { storage } from "@/shared/lib";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';

// @ts-ignore
import 'swiper/css/navigation';

// @ts-ignore
import 'swiper/css/pagination';

import clsx from "clsx"
import styles from "./GuidancePage.module.scss"

const pathIcon = (slug: string) => GuidanceIcons[`guidance-${slug}`];

const onGuidanceEnd = () => {
  storage.set('guidance', {isGuidanceCompleted: true});
}

export const GuidancePage = () => {
  return (
    <div className={clsx('mainContainer', 'mainContainerHeight')}>
      <div className={clsx(styles.guidanceCardContainer)}>
        <div className={clsx(styles.swiperContainer)}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, type: 'fraction' }}
            className="mySwiper"
            onReachEnd={onGuidanceEnd}
          >
            {GUIDANCE_DATA.map((data, index) => (
              <SwiperSlide key={data.title}>
                <div className={clsx(styles.guidanceCard)}>
                  <div className={clsx(styles['guidanceCard__header'])}>
                    {data.id && 
                      <div className={clsx(styles['guidanceCard__header__icon'])}>{data.id}</div>
                    }
                    <div className={clsx(styles['guidanceCard__header__title'])}>{data.title}</div>
                  </div>
                  <div className={clsx(styles['guidanceCard__content'])}>
                    <ul className={clsx(styles.guidanceCardList)}>
                      {data.content.map(content => (
                        <li key={content}>{content}</li>
                      ))}
                    </ul>

                    {index === GUIDANCE_DATA.length - 1 &&
                      <div className={clsx(styles.linkBox)}>
                        <NavLink
                          title={AppRoutes.DASHBOARD}
                          to={`/${AppRoutes.DASHBOARD}`}
                          className={clsx('buttonReset', styles.link)}
                        >
                          Go to {AppRoutes.DASHBOARD}
                        </NavLink>
                      </div>
                    }
                  </div>
                  <div className={clsx(
                      styles['guidanceCard__img'],
                      {[styles['guidanceCard__img--high']]: data.style === 'high'}
                    )}
                  >
                    <img src={pathIcon(data.slug)} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}