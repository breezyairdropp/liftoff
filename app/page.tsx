"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  alert("me")

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
        <svg
          style={{ filter: "contrast(125%) brightness(110%)" }}
          className="fixed z-[1] w-full h-full opacity-[35%]"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".7"
              numOctaves="3"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
          <motion.svg
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="block w-[100px] row-start-2 mb-8 md:mb-6"
            viewBox="0 0 87 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.432617 14H9.31836V11.0469H4.15918V1.31738H0.432617V14ZM13.3771 14H17.1037V1.31738H13.3771V14ZM21.7689 14H25.4955V9.50879H30.1889V6.71387H25.4955V4.27051H30.6811V1.31738H21.7689V14ZM37.5875 14H41.3141V4.27051H44.8297V1.31738H34.0719V4.27051H37.5875V14ZM54.241 14.3428C55.5359 14.3428 56.6609 14.0732 57.616 13.5342C58.5711 12.9951 59.3094 12.2275 59.8309 11.2314C60.3582 10.2354 60.6219 9.0459 60.6219 7.66309V7.64551C60.6219 6.26855 60.3582 5.08203 59.8309 4.08594C59.3094 3.08984 58.5711 2.32227 57.616 1.7832C56.6609 1.24414 55.5359 0.974609 54.241 0.974609C52.952 0.974609 51.827 1.24414 50.866 1.7832C49.9109 2.31641 49.1697 3.08398 48.6424 4.08594C48.115 5.08203 47.8514 6.26855 47.8514 7.64551V7.66309C47.8514 9.0459 48.1121 10.2383 48.6336 11.2402C49.1609 12.2363 49.9021 13.0039 50.8572 13.543C51.8182 14.0762 52.9461 14.3428 54.241 14.3428ZM54.241 11.3018C53.7313 11.3018 53.2801 11.1553 52.8875 10.8623C52.5008 10.5635 52.1961 10.1416 51.9734 9.59668C51.7566 9.0459 51.6482 8.40137 51.6482 7.66309V7.64551C51.6482 6.90723 51.7566 6.26562 51.9734 5.7207C52.1961 5.17578 52.5008 4.75684 52.8875 4.46387C53.2801 4.16504 53.7313 4.01562 54.241 4.01562C54.7508 4.01562 55.199 4.16504 55.5857 4.46387C55.9783 4.75684 56.283 5.17578 56.4998 5.7207C56.7166 6.26562 56.825 6.90723 56.825 7.64551V7.66309C56.825 8.40137 56.7166 9.0459 56.4998 9.59668C56.283 10.1416 55.9783 10.5635 55.5857 10.8623C55.199 11.1553 54.7508 11.3018 54.241 11.3018ZM64.6631 14H68.3896V9.50879H73.083V6.71387H68.3896V4.27051H73.5752V1.31738H64.6631V14ZM77.6252 14H81.3518V9.50879H86.0451V6.71387H81.3518V4.27051H86.5373V1.31738H77.6252V14Z"
              fill="#1E2B3A"
            />
          </motion.svg>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[130px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
          >
            Elevate your <br />
            tech <span className="text-[#407BBF]">interviews</span>
            <span className="font-inter text-[#407BBF]">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Platform
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Full access to our platform, including all questions and
                solutions.
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                Community
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
                Join a community of like-minded individuals, and learn from each
                other.
              </p>
            </div>
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="https://github.com/Tameyer41/liftoff"
                target="_blank"
                className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                  <svg
                    className="w-[16px] h-[16px] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.5 6.5L12 12.25L18.5 6.5"
                    ></path>
                  </svg>
                </span>
                Star on Github
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="/demo"
                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                }}
              >
                <span className="mr-2"> Try it out </span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="#1E2B3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </main>

        <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div>

        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
        <div className="h-[60px] bg-[#1D2B3A] fixed bottom-0 z-20 w-full flex flex-row items-center justify-evenly">
          <p className="text-white/80 text-base md:text-lg font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
            Interviews from
          </p>
          <svg
            className="w-[20px] opacity-80"
            viewBox="0 0 706 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_17_373)">
              <path
                d="M360 294.546V433.965H553.746C545.238 478.802 519.708 516.767 481.417 542.294L598.254 632.95C666.327 570.115 705.6 477.823 705.6 368.186C705.6 342.66 703.31 318.112 699.054 294.55L360 294.546Z"
                fill="white"
              />
              <path
                d="M158.245 428.523L131.894 448.694L38.6191 521.348C97.8557 638.839 219.266 720.004 359.992 720.004C457.191 720.004 538.681 687.931 598.246 632.95L481.41 542.294C449.337 563.894 408.427 576.987 359.992 576.987C266.392 576.987 186.867 513.823 158.392 428.731L158.245 428.523Z"
                fill="white"
              />
              <path
                d="M38.6195 198.656C14.0752 247.09 0.00390625 301.746 0.00390625 360C0.00390625 418.254 14.0752 472.91 38.6195 521.344C38.6195 521.669 158.404 428.398 158.404 428.398C151.204 406.798 146.948 383.89 146.948 359.996C146.948 336.102 151.204 313.194 158.404 291.594L38.6195 198.656Z"
                fill="white"
              />
              <path
                d="M360 143.346C413.019 143.346 460.146 161.673 497.782 197.019L600.873 93.929C538.363 35.6752 457.202 0 360 0C219.273 0 97.8557 80.8367 38.6191 198.656L158.4 291.602C186.871 206.51 266.4 143.346 360 143.346Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_373">
                <rect width="705.6" height="720" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="w-[80px] text-white opacity-80"
            viewBox="0 0 593 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M217.753 4.16772H240.201L278.371 73.2007L316.54 4.16778H338.502V117.602H320.187V30.6631L286.718 90.8642H269.537L236.068 30.6631V117.602H217.753V4.16772Z"
              fill="white"
            />
            <path
              d="M397.578 119.628C389.095 119.628 381.64 117.751 375.211 113.997C368.781 110.242 363.77 105.043 360.178 98.3995C356.585 91.7552 354.788 84.1389 354.789 75.5506C354.789 66.8544 356.545 59.1571 360.057 52.4586C363.568 45.7615 368.444 40.5218 374.684 36.7393C380.925 32.9593 388.097 31.0688 396.2 31.0677C404.25 31.0677 411.179 32.9717 416.987 36.7797C422.794 40.5887 427.264 45.923 430.399 52.7825C433.532 59.643 435.099 67.6915 435.099 76.9279V81.9506H372.942C374.077 88.866 376.873 94.3083 381.33 98.2773C385.787 102.248 391.419 104.233 398.226 104.232C403.683 104.232 408.383 103.422 412.327 101.802C416.27 100.181 419.971 97.7237 423.43 94.429L433.154 106.339C423.483 115.199 411.624 119.629 397.578 119.628ZM410.95 52.3365C407.113 48.4209 402.089 46.4628 395.876 46.4621C389.825 46.4621 384.76 48.4609 380.681 52.4586C376.602 56.4559 374.022 61.8305 372.942 68.5824H417.514C416.973 61.6681 414.785 56.2528 410.95 52.3365Z"
              fill="white"
            />
            <path
              d="M457.306 48.0836H440.449V33.0939H457.306V8.30066H474.972V33.0939H500.581V48.0836H474.972V86.0836C474.972 92.403 476.053 96.9132 478.214 99.6143C480.374 102.316 484.075 103.667 489.316 103.665C491.638 103.665 493.61 103.571 495.232 103.382C496.853 103.194 498.636 102.937 500.581 102.612V117.439C498.361 118.081 496.1 118.569 493.814 118.898C491.198 119.283 488.557 119.473 485.912 119.465C466.84 119.465 457.305 109.04 457.306 88.1904V48.0836Z"
              fill="white"
            />
            <path
              d="M592.645 117.602H575.302V105.772C572.223 110.202 568.306 113.619 563.552 116.022C558.797 118.424 553.394 119.626 547.343 119.628C539.888 119.628 533.283 117.724 527.529 113.915C521.775 110.107 517.251 104.867 513.955 98.1967C510.659 91.5255 509.012 83.8957 509.012 75.3075C509.012 66.665 510.687 59.0215 514.037 52.3769C517.386 45.7336 522.018 40.5211 527.935 36.7393C533.85 32.9593 540.644 31.0688 548.316 31.0677C554.097 31.0677 559.283 32.1888 563.875 34.4308C568.406 36.6218 572.329 39.8907 575.302 43.9507V33.0938H592.645V117.602ZM574.978 62.6676C573.086 57.8601 570.101 54.0652 566.023 51.283C561.943 48.5015 557.229 47.1108 551.882 47.1108C544.317 47.1108 538.293 49.6495 533.81 54.7267C529.325 59.8044 527.083 66.6646 527.084 75.3074C527.084 84.0047 529.245 90.8918 533.567 95.9687C537.888 101.046 543.75 103.585 551.153 103.585C556.609 103.585 561.471 102.18 565.74 99.371C570.007 96.5637 573.086 92.7826 574.978 88.0278V62.6676Z"
              fill="white"
            />
            <path
              d="M129.261 0.333374C114.533 0.333374 103.021 11.4237 92.5991 25.5119C78.2777 7.28039 66.3006 0.333374 51.9676 0.333374C22.746 0.333374 0.356445 38.3554 0.356445 78.5996C0.356445 103.783 12.5422 119.667 32.953 119.667C47.6434 119.667 58.2087 112.742 76.9912 79.9164C76.9912 79.9164 84.8207 66.0926 90.2069 56.5702C92.0943 59.617 94.0822 62.9 96.1705 66.4194L104.978 81.2331C122.135 109.939 131.695 119.667 149.016 119.667C168.901 119.667 179.967 103.566 179.967 77.8589C179.967 35.7219 157.072 0.333374 129.261 0.333374ZM62.6685 71.0281C47.4403 94.8948 42.1722 100.244 33.6938 100.244C24.9685 100.244 19.7827 92.5856 19.7827 78.9288C19.7827 49.7127 34.3523 19.8382 51.7207 19.8382C61.1261 19.8382 68.986 25.2691 81.0253 42.5012C69.5934 60.0325 62.6685 71.0281 62.6685 71.0281ZM120.142 68.0235L109.611 50.4638C106.761 45.8299 104.022 41.5645 101.395 37.6677C110.886 23.0213 118.715 15.7233 128.026 15.7233C147.37 15.7233 162.845 44.1987 162.845 79.1757C162.845 92.5081 158.478 100.244 149.428 100.244C140.754 100.244 136.611 94.5169 120.142 68.0235Z"
              fill="white"
            />
          </svg>
          <svg
            className="w-[20px] opacity-80"
            viewBox="0 0 814 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_19_471)">
              <path
                d="M788.1 340.9C782.3 345.4 679.9 403.1 679.9 531.4C679.9 679.8 810.2 732.3 814.1 733.6C813.5 736.8 793.4 805.5 745.4 875.5C702.6 937.1 657.9 998.6 589.9 998.6C521.9 998.6 504.4 959.1 425.9 959.1C349.4 959.1 322.2 999.9 260 999.9C197.8 999.9 154.4 942.9 104.5 872.9C46.7 790.7 0 663 0 541.8C0 347.4 126.4 244.3 250.8 244.3C316.9 244.3 372 287.7 413.5 287.7C453 287.7 514.6 241.7 589.8 241.7C618.3 241.7 720.7 244.3 788.1 340.9ZM554.1 159.4C585.2 122.5 607.2 71.3 607.2 20.1C607.2 13 606.6 5.8 605.3 0C554.7 1.9 494.5 33.7 458.2 75.8C429.7 108.2 403.1 159.4 403.1 211.3C403.1 219.1 404.4 226.9 405 229.4C408.2 230 413.4 230.7 418.6 230.7C464 230.7 521.1 200.3 554.1 159.4Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_19_471">
                <rect width="814" height="1000" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="w-[70px] text-white opacity-80 mt-[6px]"
            viewBox="0 0 603 182"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_19_479)">
              <path
                d="M374.006 142.184C339.007 167.981 288.277 181.745 244.6 181.745C183.358 181.745 128.224 159.094 86.5125 121.42C83.2354 118.458 86.1717 114.42 90.1042 116.727C135.119 142.918 190.777 158.674 248.27 158.674C287.045 158.674 329.7 150.652 368.92 134.004C374.845 131.488 379.8 137.884 374.006 142.184Z"
                fill="white"
              />
              <path
                d="M388.557 125.536C384.1 119.821 358.984 122.836 347.711 124.173C344.277 124.593 343.752 121.604 346.846 119.454C366.849 105.376 399.673 109.439 403.5 114.158C407.328 118.903 402.504 151.806 383.707 167.51C380.823 169.921 378.07 168.637 379.355 165.438C383.576 154.899 393.04 131.278 388.557 125.536Z"
                fill="white"
              />
              <path
                d="M348.497 20.066V6.38079C348.497 4.30966 350.07 2.92017 351.958 2.92017H413.227C415.193 2.92017 416.766 4.33588 416.766 6.38079V18.0997C416.74 20.066 415.088 22.6352 412.152 26.6988L380.403 72.0278C392.201 71.7394 404.654 73.4959 415.35 79.5258C417.762 80.8891 418.418 82.8815 418.601 84.8478V99.4506C418.601 101.443 416.399 103.776 414.092 102.57C395.242 92.6866 370.205 91.6117 349.363 102.675C347.239 103.829 345.011 101.522 345.011 99.5293V85.6605C345.011 83.4321 345.037 79.6307 347.265 76.2487L384.047 23.5004H352.037C350.07 23.5004 348.497 22.1109 348.497 20.066Z"
                fill="white"
              />
              <path
                d="M124.999 105.454H106.359C104.576 105.323 103.16 103.986 103.029 102.282V6.61676C103.029 4.70293 104.628 3.18234 106.621 3.18234H124.003C125.812 3.26094 127.253 4.65048 127.385 6.38079V18.8862H127.725C132.261 6.80026 140.781 1.16364 152.264 1.16364C163.931 1.16364 171.219 6.80026 176.462 18.8862C180.972 6.80026 191.223 1.16364 202.207 1.16364C210.02 1.16364 218.567 4.38831 223.784 11.6242C229.683 19.6727 228.477 31.3654 228.477 41.6162L228.451 101.994C228.451 103.907 226.851 105.454 224.859 105.454H206.245C204.383 105.323 202.889 103.829 202.889 101.994V51.2903C202.889 47.2529 203.256 37.1856 202.365 33.3579C200.975 26.9348 196.807 25.1258 191.406 25.1258C186.897 25.1258 182.178 28.1408 180.264 32.9647C178.35 37.7886 178.534 45.8634 178.534 51.2903V101.994C178.534 103.907 176.934 105.454 174.942 105.454H156.328C154.44 105.323 152.972 103.829 152.972 101.994L152.946 51.2903C152.946 40.62 154.702 24.9161 141.463 24.9161C128.066 24.9161 128.591 40.2267 128.591 51.2903V101.994C128.591 103.907 126.991 105.454 124.999 105.454Z"
                fill="white"
              />
              <path
                d="M469.514 1.16364C497.173 1.16364 512.143 24.9161 512.143 55.1179C512.143 84.2973 495.6 107.447 469.514 107.447C442.354 107.447 427.567 83.6943 427.567 54.0955C427.567 24.3131 442.537 1.16364 469.514 1.16364ZM469.672 20.6952C455.934 20.69
