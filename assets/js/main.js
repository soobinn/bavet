const lenis = new Lenis();

gsap.registerPlugin(CustomEase);
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
// /*************************************************/

// header

let lastScroll = 0;

$(window).scroll(function () {
    let current = $(this).scrollTop();

    if (current > lastScroll) {
        gsap.to($("header"), {
            yPercent: -100,
        });
    } else {
        gsap.to($("header"), {
            yPercent: 0,
        });
    }

    lastScroll = current;
});

gsap.to(".sub-menu", {
    scrollTrigger: {
        trigger: "footer",
        start: "0% 50%",
        end: "100% 100%",
        scrub: true,
    },
    top: "100%",
});

// Sc-moremenu hover icon move

setInterval(function () {
    $(".sc-moreMenu").find(".hover-img").toggleClass("on");
}, 500);

// Sc-moremenu img-box move

let moreImgTl = gsap.timeline();

const imgBoxIndices = [2, 3, 5, 6];

imgBoxIndices.forEach((index) => {
    moreImgTl.to(
        $(`.sc-moreMenu .grid-group .img-box:nth-child(${index}) .img-con`),
        {
            rotate: "360deg",
            ease: "Power4.easeInOut",
            scrollTrigger: {
                trigger: ".sc-moreMenu",
                start: "0% 0%",
                end: "100% 0%",
                scrub: true,
            },
        }
    );
});
const hoverImgIndices = [1, 4];

hoverImgIndices.forEach((index) => {
    const imgConSelector = `.sc-moreMenu .grid-group .img-box:nth-child(${index}) .img-con`;
    const hoverImgSelector = `.sc-moreMenu .grid-group .img-box:nth-child(${index}) .hover-img`;

    $(imgConSelector).hover(
        function () {
            gsap.to($(this), {
                scale: 1.2,
                rotate: "90deg",
            });
            gsap.to($(hoverImgSelector), {
                opacity: 0,
            });

            let dataValue = $(this).data("text");
            $(".sc-moreMenu .text-more")
                .find(dataValue)
                .addClass("on")
                .siblings()
                .removeClass("on");
        },
        function () {
            gsap.to($(this), {
                scale: 1,
                rotate: "0deg",
            });
            gsap.to($(hoverImgSelector), {
                opacity: 1,
            });
            let dataValue = $(this).data("text");
        }
    );
});

// .sc-record sticky

// 1 .record circle
// 2 .record side img

let recordTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-record .record-area",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
});

recordTl
    .to(
        ".sc-record .side-group .side-img:nth-child(1)",
        {
            yPercent: -100,
        },
        "a"
    )
    .to(
        ".sc-record .side-group .side-img:nth-child(2)",
        {
            yPercent: 100,
        },
        "a"
    )
    .to(
        ".sc-record .center-group .record-bg",
        {
            scale: 10,
        },
        "a"
    )
    .to(
        ".sc-record .center-group .img-wrap",
        {
            rotate: "360deg",
        },
        "a"
    );

// sc-take

gsap.to(".sc-take .round-text", {
    rotate: "-180deg",

    scrollTrigger: {
        trigger: ".round",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 1,
    },
});

//.sc-eat .move-icon

setInterval(function () {
    $(".sc-eat .move-icon").toggleClass("on");
}, 1500);

// 스크롤시 title up&down

$(".text-module-wrap").each(function () {
    gsap.to($(this).find(".text-module > span"), {
        scrollTrigger: {
            trigger: $(this),
            start: "0% 80%",
            end: "100% 100%",
            scrub: 1,
        },
        y: 0,
    });
});
