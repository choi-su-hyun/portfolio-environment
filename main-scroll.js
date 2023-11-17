// 변수-------------hero-scroll-ani
let heroSection = document.querySelector("#section-hero");
let firstTitle = document.querySelector("#first-title");
let secondTitle = document.querySelector("#second-title");
let back = document.querySelector("#background-blur");
// let lastScrollY = 0;
// back.style.backdropFilter = 'blur(10px)';
let heroSectionHeight = heroSection.getBoundingClientRect().height;

// 변수------------세계뉴스 애니메이션
let worldNewsSection = document.querySelector("#section-world-news");
let NewsSection = document.querySelector("#section-news");

// 변수------------amount-damage-scroll-animation
let worldSection = document.querySelector("#section-world-news");
let damageSection = document.querySelector("#section-amount-of-damage");
let damageSectionMove = document.querySelector(
  "#section-amount-of-damage-ani-move"
);
let damageSectionVideo = document.querySelector(
  "#section-amount-of-damage video"
);

// 변수------------그래프 섹션으로 덮기
let graphSection = document.querySelector("#section-scientist");
let sizeWrap = document.querySelector("#size-controler");

// 변수------------온도 섹션 클릭 이벤트
let temperatureBtn = document.querySelectorAll(".temperature-card__number-btn");
let temperatureContent = document.querySelectorAll(".temperature-card");
let triggerLock = document.querySelector("#trigger-lock");
let humanRightSection = document.querySelector("#section-human-rights");
let triggerLock2 = document.querySelector("#trigger-lock2");
let triggerLock3 = document.querySelector("#trigger-lock3");

// 변수------------도움 요청 섹션 텍스트 블로 스크롤 애니메이션
let helpMeSection = document.querySelector("#section-help-me");
let blurText1 = document.querySelector("#blur-text1");
let blurText2 = document.querySelector("#blur-text2");
let leftHand = document.querySelector(".hand-wrap__left-hand");
let rightHand = document.querySelector(".hand-wrap__right-hand");
let lockOff1 = document.querySelector("#trigger-lock");
let lockOff2 = document.querySelector("#trigger-lock2");
let lockOff3 = document.querySelector("#trigger-lock3");

// 코드------------hero-scroll-ani
document.addEventListener("scroll", viewPosition);
// gsap.registerPlugin(ScrollTrigger);

function viewPosition() {
  // const scrollY = window.scrollY;

  if (window.scrollY >= 0 && window.scrollY <= heroSectionHeight / 5) {
    // console.log('작동')
    document.addEventListener("scroll", heroSectionAnimation);

    function heroSectionAnimation() {
      let value = 100 - (window.scrollY / (heroSectionHeight / 5)) * 100;
      //  console.log(`value : ${value}%`);
      firstTitle.style.opacity = `${value}%`;

      if (value < 0) {
        // console.log('if 작동')
        // console.log('firstTitleOpacity')
        firstTitle.style.display = "none";
      } else {
        // console.log('if 거짓 작동')
        firstTitle.style.display = "block";
      }
    }
  } else if (
    window.scrollY > heroSectionHeight / 5 &&
    window.scrollY < (heroSectionHeight / 5) * 2
  ) {
    // console.log('작동2')
    document.addEventListener("scroll", heroSectionAnimation2);

    function heroSectionAnimation2() {
      let value =
        ((window.scrollY - heroSectionHeight / 5) /
          ((heroSectionHeight / 5) * 2)) *
        100;
      // console.log(`value : ${value}%`);
      back.style.backdropFilter = `blur(${value}px)`;
    }
  } else if (
    window.scrollY > (heroSectionHeight / 5) * 2 &&
    window.scrollY <= (heroSectionHeight / 5) * 3
  ) {
    // console.log('작동3')
    document.addEventListener("scroll", heroSectionAnimation3);

    function heroSectionAnimation3() {
      let value =
        ((window.scrollY - (heroSectionHeight / 5) * 2) /
          ((heroSectionHeight / 5) * 1)) *
        100;
      // console.log(`value : ${value}%`);
      secondTitle.style.opacity = `${value}%`;

      if (value < 2) {
        // console.log('if 작동 2')
        secondTitle.style.display = "none";
      } else {
        // console.log('if 거짓 작동 2')
        secondTitle.style.display = "block";
      }
    }
  }

  // 코드------------세계뉴스 애니메이션
  if (worldNewsSection.getBoundingClientRect().top < window.innerHeight / 2) {
    // document.addEventListener('scroll', worldNewsSectionEvent);

    worldNewsSection.classList.add("background-change");
    NewsSection.classList.add("background-change");
    // function worldNewsSectionEvent () {
    // }
  } else {
    worldNewsSection.classList.remove("background-change");
    NewsSection.classList.remove("background-change");
  }

  // 코드--------그래프 섹션 덮기(연기나고 있는 영상 섹션)
  if (
    graphSection.getBoundingClientRect().top < window.innerHeight &&
    graphSection.getBoundingClientRect().top >= 0
  ) {
    document.addEventListener("scroll", graphSectionEvent);

    function graphSectionEvent() {
      // console.log(graphSection.getBoundingClientRect().top, window.innerHeight);
      let value =
        (100 -
          (graphSection.getBoundingClientRect().top / window.innerHeight) *
            100) *
        6;
      if (value <= 0) {
        value = 0;
      }
      damageSection.style.transform = `translate3d(0, ${value}px, 0)`;
      damageSection.style.transformStyle = "preserve-3d";
      damageSection.style.willChange = "transform";
      // console.log(value);
    }
  }

  // 코드------------도움 요청 섹션 텍스트 블러 스크롤 애니메이션

  // 반응형
  if (matchMedia("screen and (min-width: 768px)").matches) {
    if (
      helpMeSection.getBoundingClientRect().top < window.innerHeight &&
      helpMeSection.getBoundingClientRect().top > 0
    ) {
      document.addEventListener("scroll", doTextBlur);

      function doTextBlur() {
        let value1 =
          (helpMeSection.getBoundingClientRect().top /
            (window.innerHeight * 6)) *
          100;
        let value2 =
          (helpMeSection.getBoundingClientRect().top / window.innerHeight) *
          100;
        // console.log(`value1 : ${value1}, value2 : ${value2}`);
        if (value1 <= 0) {
          value1 = 0;
        }
        if (value2 <= 0) {
          value2 = 0;
        }
        blurText1.style.filter = `blur(${value1}px)`;
        blurText2.style.filter = `blur(${value2}px)`;

        // blurText.forEach(function( item ) {
        //   item.style.filter = `blur(${value1}px)`;
        //   // console.log('foreach');
        // })
      }
    }
  }

  //클릭으로 섹션 display block 설정하기

  if (getComputedStyle(lockOff1).display == "block") {
    //5 온도 섹션
    gsap.to("#section-temperature-5 .container", {
      scrollTrigger: {
        trigger: "#section-temperature-5 .container",
        // toggleActions: "restart none reverse none"
      },
      y: 0,
      ease: "power1.out",
      transformOrigin: "center center",
      duration: 1,
      opacity: 1,
    });
  }

  if (getComputedStyle(lockOff2).display == "block") {
    //6 온도 섹션
    gsap.to("#section-temperature-6 .container", {
      scrollTrigger: {
        trigger: "#section-temperature-6 .container",
        // toggleActions: "restart none reverse none"
      },
      y: 0,
      ease: "power1.out",
      transformOrigin: "center center",
      duration: 1,
      opacity: 1,
    });
  }

  if (getComputedStyle(lockOff3).display == "block") {
    document.addEventListener("scroll", viewPosition2);

    function viewPosition2() {
      if (helpMeSection.getBoundingClientRect().top < window.innerHeight / 3) {
        leftHand.classList.add("hand-wrap__left-hand--view");
        rightHand.classList.add("hand-wrap__right-hand--view");
      }
    }
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gangdong-value__leaf1", {
      scrollTrigger: {
        trigger: "#section-gangdong-value",
        // toggleActions: "restart none reverse none"
      },
      x: 20,
      y: 60,
      transformOrigin: "center center",
      duration: 1.4,
      rotation: 160,
      opacity: 1,
    });
    gsap.to(".gangdong-value__leaf2", {
      scrollTrigger: {
        trigger: ".gangdong-value__leaf2",
        // toggleActions: "restart none reverse none"
      },
      x: 20,
      y: 20,
      transformOrigin: "center center",
      duration: 1.8,
      rotation: 240,
      opacity: 1,
    });
    gsap.to(".gangdong-value__leaf3", {
      scrollTrigger: {
        trigger: ".gangdong-value__leaf3",
        // toggleActions: "restart none reverse none"
      },
      x: 40,
      y: 120,
      transformOrigin: "center center",
      duration: 1.2,
      rotation: 200,
      opacity: 1,
    });
    gsap.to(".gangdong-value__leaf4", {
      scrollTrigger: {
        trigger: ".gangdong-value__leaf4",
        // toggleActions: "restart none reverse none"
      },
      x: 40,
      y: 200,
      transformOrigin: "center center",
      duration: 1.8,
      rotation: 280,
      opacity: 1,
    });

    gsap.to("#section-gangdong-value .section-text__title-big", {
      scrollTrigger: {
        trigger: "#section-gangdong-value .section-text__title-big",
        // toggleActions: "restart none reverse none"
      },

      y: 0,
      transformOrigin: "center center",
      duration: 0.8,
      opacity: 1,
    });

    let planWrap1 = document.querySelector(".plan-item.ani__item1");
    let planImage1 = document.querySelector(
      ".ani__item1 .plan-item__image-wrap"
    );
    let planTitle1 = document.querySelector(
      ".ani__item1 .plan-item__title-wrap"
    );
    let planParag1 = document.querySelector(
      ".ani__item1 .plan-item__list-wrap"
    );

    let planWrap2 = document.querySelector(".plan-item.ani__item2");
    let planImage2 = document.querySelector(
      ".ani__item2 .plan-item__image-wrap"
    );
    let planTitle2 = document.querySelector(
      ".ani__item2 .plan-item__title-wrap"
    );
    let planParag2 = document.querySelector(
      ".ani__item2 .plan-item__list-wrap"
    );

    let planWrap3 = document.querySelector(".plan-item.ani__item3");
    let planImage3 = document.querySelector(
      ".ani__item3 .plan-item__image-wrap"
    );
    let planTitle3 = document.querySelector(
      ".ani__item3 .plan-item__title-wrap"
    );
    let planParag3 = document.querySelector(
      ".ani__item3 .plan-item__list-wrap"
    );

    let planWrap4 = document.querySelector(".plan-item.ani__item4");
    let planImage4 = document.querySelector(
      ".ani__item4 .plan-item__image-wrap"
    );
    let planTitle4 = document.querySelector(
      ".ani__item4 .plan-item__title-wrap"
    );
    let planParag4 = document.querySelector(
      ".ani__item4 .plan-item__list-wrap"
    );

    if (planWrap1.getBoundingClientRect().top < window.innerHeight) {
      console.log(planImage1);
      planImage1.classList.add("ani---appear-scale");
      planTitle1.classList.add("ani---appear-up");
      planParag1.classList.add("ani---appear-up-delay1");
    }
    if (planWrap2.getBoundingClientRect().top < window.innerHeight) {
      planImage2.classList.add("ani---appear-scale");
      planTitle2.classList.add("ani---appear-up");
      planParag2.classList.add("ani---appear-up-delay1");
    }
    if (planWrap3.getBoundingClientRect().top < window.innerHeight) {
      planImage3.classList.add("ani---appear-scale");
      planTitle3.classList.add("ani---appear-up");
      planParag3.classList.add("ani---appear-up-delay1");
    }
    if (planWrap4.getBoundingClientRect().top < window.innerHeight) {
      planImage4.classList.add("ani---appear-scale");
      planTitle4.classList.add("ani---appear-up");
      planParag4.classList.add("ani---appear-up-delay1");
    }

    //시청 유도 섹션
    gsap.to("#section-induce .section-text__title-big--white", {
      scrollTrigger: {
        trigger: "#section-induce .section-text__title-big--white",
        // toggleActions: "restart none reverse none"
      },

      opacity: 1,
      y: 0,
      transformOrigin: "center center",
      duration: 0.8,
    });
    gsap.to("#section-induce .cta-btn--point-ani", {
      scrollTrigger: {
        trigger: "#section-induce .cta-btn--point-ani",
        // toggleActions: "restart none reverse none"
      },

      opacity: 1,
      delay: 0.2,
      // transformOrigin: "center center",
      duration: 0.8,
    });

    // document.addEventListener("scrollStart", () => console.log("scrolling ended!"));
  }
}

//-------- 온도 섹션 클릭 이벤트

let cardTriggerNum = 0;
let count = 0;

const temperatureAppear = (el) => {
  // document.querySelectorAll('.temperature-card').forEach((temperatureCard)=>{
  //   temperatureCard.classList.remove('show');
  // })
  el.classList.add("hide");
  el.parentElement.querySelector(".click-induction__wrap").style.display =
    "none";
  el.parentElement.querySelector(".temperature-card").classList.add("show");

  count += 1;
  if (count == 4) {
    triggerLock.style.display = "block";
  }

  // //setTimeout으로 구현하기
  // setTimeout(function() {
  //   temperatureContent.forEach(function( item ) {
  //     // console.log(item);
  //     if ( getComputedStyle(item).opacity == 1 ) {
  //       cardTriggerNum += 1;
  //       // console.log(getComputedStyle(item).opacity);
  //     } else {
  //       cardTriggerNum = 0;
  //     }

  //     if ( cardTriggerNum >= 3 ) {
  //       triggerLock.style.display = 'block';
  //     }
  //     console.log(cardTriggerNum);
  //   })

  // }, 500)
};

let count2 = 0;

const temperatureAppearSection = (el) => {
  el.classList.add("hide");
  el.parentElement.querySelector(".click-induction__wrap").style.display =
    "none";
  let content = el.parentElement.querySelector(".temperature-section-content");
  content.classList.add("show");
  console.log(getComputedStyle(content).opacity);
  count2 += 1;
  if (count2 == 1) {
    triggerLock2.style.display = "block";
  }
  // setTimeout (function() {
  //   if ( getComputedStyle(content).opacity == 1 ) {
  //     triggerLock2.style.display = 'block';
  //   } else {
  //     triggerLock2.style.display = 'none';
  //   }
  // }, 400)
};

let count3 = 0;

const temperatureAppearSection2 = (el) => {
  el.classList.add("hide");
  el.parentElement.querySelector(".click-induction__wrap").style.display =
    "none";
  let content = el.parentElement.querySelector(".temperature-section-content");
  content.classList.add("show");
  count3 += 1;

  if (count3 == 1) {
    triggerLock3.style.display = "block";
  }
  // setTimeout (function() {
  //   if ( getComputedStyle(content).opacity == 1 ) {
  //     triggerLock3.style.display = 'block';
  //   } else {
  //     triggerLock3.style.display = 'none';
  //   }
  // }, 400)
};

// -----------------------------
// 간단한 애니메이션 (gsap 사용)

//기사글 2개 섹션

gsap.from("#section-news .section-text__title-middle", {
  scrollTrigger: {
    trigger: "#section-news .section-text__title-middle",
    // toggleActions: "restart none reverse none"
  },
  y: 80,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});

gsap.from("#section-news .news-item:first-child .news-item__image", {
  scrollTrigger: {
    trigger: "#section-news .news-item:first-child .news-item__image",
    // toggleActions: "restart none reverse none"
  },
  y: 120,
  delay: 0.2,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
gsap.from("#section-news .news-item:first-child .news-item__title", {
  scrollTrigger: {
    trigger: "#section-news .news-item:first-child .news-item__title",
    // toggleActions: "restart none reverse none"
  },
  y: 120,
  delay: 0.3,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
gsap.from("#section-news .news-item:first-child .news-item__paragraph", {
  scrollTrigger: {
    trigger: "#section-news .news-item:first-child .news-item__paragraph",
    // toggleActions: "restart none reverse none"
  },
  y: 120,
  delay: 0.4,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});

gsap.from("#section-news .news-item:last-child .news-item__image", {
  scrollTrigger: {
    trigger: "#section-news .news-item:last-child .news-item__image",
    // toggleActions: "restart none reverse none"
  },
  y: 120,
  delay: 0.3,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
gsap.from("#section-news .news-item:last-child .news-item__title", {
  scrollTrigger: {
    trigger: "#section-news .news-item:last-child .news-item__title",
    // toggleActions: "restart none reverse none"
  },
  y: 120,
  delay: 0.4,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
gsap.from("#section-news .news-item:last-child .news-item__paragraph", {
  scrollTrigger: {
    trigger: "#section-news .news-item:last-child .news-item__paragraph",
    // toggleActions: "restart none reverse none"
  },
  y: 120,
  delay: 0.5,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});

//세계뉴스 섹션
gsap.from(".changing-side", {
  scrollTrigger: {
    trigger: ".changing-side",
    // toggleActions: "restart none reverse none"
  },
  scale: 0.4,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 1.2,
  opacity: 0,
});
if (matchMedia("screen and (min-width: 768px)").matches) {
  gsap.from(".world-news-list", {
    scrollTrigger: {
      trigger: ".world-news-list",
      // toggleActions: "restart none reverse none"
    },
    x: 80,
    scale: 0.6,
    ease: "power1.out",
    transformOrigin: "100% center",
    duration: 1.2,
    opacity: 0,
  });
} else {
  gsap.from(".world-news-list", {
    scrollTrigger: {
      trigger: ".world-news-list",
      // toggleActions: "restart none reverse none"
    },
    y: 80,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1.2,
    opacity: 0,
  });
}

//피해액 섹션
gsap.from("#section-amount-of-damage .section-text__title-big--white", {
  scrollTrigger: {
    trigger: "#section-amount-of-damage .section-text__title-big--white",
    // toggleActions: "restart none reverse none"
  },
  y: -120,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
gsap.from("#section-amount-of-damage .section-text__subtext--white", {
  scrollTrigger: {
    trigger: "#section-amount-of-damage .section-text__subtext--white",
    // toggleActions: "restart none reverse none"
  },
  y: -60,
  delay: 0.2,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});

//과학자 그래프 섹션
gsap.from("#section-scientist .section-text__title-big--white.ani__title1 ", {
  scrollTrigger: {
    trigger: "#section-scientist .section-text__title-big--white.ani__title1",
    // toggleActions: "restart none reverse none"
  },
  y: 120,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
gsap.from("#section-scientist .graph-wrapper", {
  scrollTrigger: {
    trigger: "#section-scientist .graph-wrapper",
    // toggleActions: "restart none reverse none"
  },
  scale: 0.6,
  delay: 0.2,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
gsap.from("#section-scientist .paper-offer", {
  scrollTrigger: {
    trigger: "#section-scientist .paper-offer",
    // toggleActions: "restart none reverse none"
  },
  x: 40,
  delay: 0.4,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
gsap.from("#section-scientist .section-text__title-big--white.ani__title2", {
  scrollTrigger: {
    trigger: "#section-scientist .section-text__title-big--white.ani__title2",
    // toggleActions: "restart none reverse none"
  },
  y: 120,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
gsap.from("#section-scientist .sub-btn--white", {
  scrollTrigger: {
    trigger: "#section-scientist .sub-btn--white",
    // toggleActions: "restart none reverse none"
  },
  y: 120,
  delay: 0.2,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});

//인권침해 섹션
gsap.from("#section-human-rights .explanation__title--white", {
  scrollTrigger: {
    trigger: "#section-human-rights .explanation__title--white",
    // toggleActions: "restart none reverse none"
  },
  y: 40,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 0.8,
  opacity: 0,
});
if (matchMedia("screen and (min-width: 768px)").matches) {
  gsap.from("#section-human-rights .explanation__detail-title--white", {
    scrollTrigger: {
      trigger: "#section-human-rights .explanation__detail-title--white",
      // toggleActions: "restart none reverse none"
    },
    x: -80,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
  gsap.from("#section-human-rights .explanation__detail-paragraph--white", {
    scrollTrigger: {
      trigger: "#section-human-rights .explanation__detail-paragraph--white",
      // toggleActions: "restart none reverse none"
    },
    x: -80,
    delay: 0.2,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
} else {
  gsap.from("#section-human-rights .explanation__detail-title--white", {
    scrollTrigger: {
      trigger: "#section-human-rights .explanation__detail-title--white",
      // toggleActions: "restart none reverse none"
    },
    y: 80,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
  gsap.from("#section-human-rights .explanation__detail-paragraph--white", {
    scrollTrigger: {
      trigger: "#section-human-rights .explanation__detail-paragraph--white",
      // toggleActions: "restart none reverse none"
    },
    y: 80,
    delay: 0.2,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
}

//1,2,3,4 온도 섹션
gsap.from("#temperature1-2-3-4 .section-text__title-big--white", {
  scrollTrigger: {
    trigger: "#temperature1-2-3-4 .section-text__title-big--white",
    // toggleActions: "restart none reverse none"
  },
  y: 80,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 1,
  opacity: 0,
});
gsap.from("#temperature1-2-3-4 .section-text__subtext--white", {
  scrollTrigger: {
    trigger: "#temperature1-2-3-4 .section-text__subtext--white",
    // toggleActions: "restart none reverse none"
  },
  y: 80,
  delay: 0.2,
  ease: "power1.out",
  transformOrigin: "center center",
  duration: 1,
  opacity: 0,
});

if (matchMedia("screen and (min-width: 768px)").matches) {
  gsap.from("#temperature1-2-3-4 .temperature-card-set.ani__card1", {
    scrollTrigger: {
      trigger: "#temperature1-2-3-4 .temperature-card-set.ani__card1",
      // toggleActions: "restart none reverse none"
    },
    x: -80,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
  gsap.from("#temperature1-2-3-4 .temperature-card-set.ani__card2", {
    scrollTrigger: {
      trigger: "#temperature1-2-3-4 .temperature-card-set.ani__card2",
      // toggleActions: "restart none reverse none"
    },
    x: -80,
    delay: 0.2,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
  gsap.from("#temperature1-2-3-4 .temperature-card-set.ani__card3", {
    scrollTrigger: {
      trigger: "#temperature1-2-3-4 .temperature-card-set.ani__card3",
      // toggleActions: "restart none reverse none"
    },
    x: -80,
    delay: 0.3,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
  gsap.from("#temperature1-2-3-4 .temperature-card-set.ani__card4", {
    scrollTrigger: {
      trigger: "#temperature1-2-3-4 .temperature-card-set.ani__card4",
      // toggleActions: "restart none reverse none"
    },
    x: -80,
    delay: 0.4,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
} else {
  gsap.from("#temperature1-2-3-4 .temperature-card-set.ani__card1", {
    scrollTrigger: {
      trigger: "#temperature1-2-3-4 .temperature-card-set.ani__card1",
      // toggleActions: "restart none reverse none"
    },
    y: 80,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
  gsap.from("#temperature1-2-3-4 .temperature-card-set.ani__card2", {
    scrollTrigger: {
      trigger: "#temperature1-2-3-4 .temperature-card-set.ani__card2",
      // toggleActions: "restart none reverse none"
    },
    y: 80,
    delay: 0.2,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
  gsap.from("#temperature1-2-3-4 .temperature-card-set.ani__card3", {
    scrollTrigger: {
      trigger: "#temperature1-2-3-4 .temperature-card-set.ani__card3",
      // toggleActions: "restart none reverse none"
    },
    y: 80,
    delay: 0.3,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
  gsap.from("#temperature1-2-3-4 .temperature-card-set.ani__card4", {
    scrollTrigger: {
      trigger: "#temperature1-2-3-4 .temperature-card-set.ani__card4",
      // toggleActions: "restart none reverse none"
    },
    y: 80,
    delay: 0.4,
    ease: "power1.out",
    transformOrigin: "center center",
    duration: 1,
    opacity: 0,
  });
}

//5 온도 섹션
// lock으로 인해 위에 eventlistener에 옮김

// ---------------
