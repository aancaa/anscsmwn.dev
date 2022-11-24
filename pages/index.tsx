import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import Canvas from '../components/canvas/Canvas';
import Doodle from '../components/layout/Doodle';
import Main from '../components/layout/Main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hi, I&apos;m Nas.</title>
      </Head>
      <Main className="cursor-pencil dark:cursor-pencil-dark">
        <Canvas />
        <div className="mt-12 flex flex-col items-center justify-between sm:mt-0 sm:flex-row">
          <div className="noselect relative">
            <Image src="/me.svg" alt="me" priority width={300} height={200} />
            <Doodle />
          </div>
          <div className="max-w-xl text-center md:text-left">
            <h1 className="font-doodle">
              Hi, I&apos;m Nas.
              <span>
                <svg
                  className="wave ml-3 h-10 w-10 fill-black dark:fill-white"
                  viewBox="0 0 256 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M203.7 67.3C199.454 59.9558 192.466 54.5978 184.272 52.4039C176.077 50.2099 167.347 51.3595 160 55.6C157.632 56.9472 155.447 58.5941 153.5 60.5L139 35.4C134.754 28.0558 127.766 22.6978 119.572 20.5039C111.377 18.3099 102.647 19.4595 95.3 23.7C91.994 25.6039 89.049 28.0749 86.6 31C83.6409 29.0562 80.4041 27.5727 77 26.6C70.8876 24.9623 64.4269 25.1737 58.4346 27.2073C52.4423 29.2409 47.1874 33.0055 43.3344 38.0252C39.4813 43.0449 37.203 49.0943 36.7875 55.4086C36.372 61.7229 37.8379 68.0187 41 73.5L41.5 74.4C38.873 75.0946 36.3507 76.1372 34 77.5C26.6759 81.7643 21.3354 88.752 19.1436 96.9387C16.9517 105.125 18.0864 113.847 22.3 121.2L64.3 194C76.4999 215.138 96.5971 230.563 120.17 236.883C143.744 243.203 168.862 239.9 190 227.7C211.138 215.5 226.563 195.403 232.883 171.829C239.203 148.256 235.9 123.138 223.7 102L203.7 67.3ZM209.7 165.6C206.224 178.598 198.97 190.273 188.856 199.147C178.742 208.021 166.222 213.695 152.882 215.451C139.542 217.207 125.981 214.966 113.915 209.011C101.849 203.056 91.8211 193.656 85.1 182L43.1 109.2C42.0457 107.368 41.7589 105.194 42.3022 103.152C42.8456 101.11 44.1749 99.3654 46 98.3C47.8467 97.2408 50.0362 96.9513 52.0947 97.494C54.1533 98.0367 55.9154 99.3681 57 101.2L79 139.3C79.2071 139.767 79.4762 140.205 79.8 140.6L80.1 140.9C80.278 141.21 80.5159 141.482 80.8 141.7L81.1 142L82.1 142.9H82.2L83.3 143.6L83.7 143.8L84.6 144.3H85L86.3 144.7H86.4L87.6 144.9H90.9C90.9 144.873 90.9105 144.848 90.9293 144.829C90.948 144.811 90.9734 144.8 91 144.8L92.2 144.6H92.7L93.6 144.2H94L95.4 143.5C97.0923 142.528 98.5171 141.151 99.5468 139.493C100.576 137.835 101.179 135.948 101.3 134C101.506 131.589 100.946 129.174 99.7 127.1L61.7 61.3C60.6969 59.4689 60.4117 57.3299 60.9 55.3C61.1805 54.2737 61.6605 53.3127 62.3125 52.472C62.9645 51.6312 63.7758 50.9272 64.7 50.4C65.5896 49.8571 66.5826 49.5056 67.6157 49.3678C68.6487 49.2301 69.6992 49.3091 70.7 49.6C72.7462 50.1616 74.4996 51.4857 75.6 53.3L109.6 112.2L110.3 113.3C111.842 115.418 114.041 116.969 116.554 117.71C119.067 118.451 121.755 118.342 124.2 117.4L126 116.6C127.694 115.62 129.125 114.243 130.17 112.589C131.215 110.934 131.843 109.051 132 107.1C132.116 104.696 131.562 102.308 130.4 100.2L104.4 55.2C103.529 53.3844 103.375 51.3072 103.968 49.383C104.562 47.4588 105.859 45.8291 107.601 44.8192C109.343 43.8093 111.402 43.4935 113.367 43.9348C115.331 44.3761 117.057 45.5421 118.2 47.2L148.2 99.1L152.9 107.3C144.414 115.347 138.883 126.016 137.196 137.589C135.509 149.161 137.765 160.965 143.6 171.1C145.191 173.858 147.813 175.871 150.889 176.697C153.964 177.522 157.242 177.091 160 175.5C162.758 173.909 164.771 171.287 165.597 168.211C166.422 165.136 165.991 161.858 164.4 159.1C160.698 152.679 159.693 145.053 161.605 137.892C163.517 130.731 168.19 124.621 174.6 120.9L175.6 120.2C175.87 120.092 176.11 119.921 176.3 119.7L176.6 119.5L177.3 118.8H177.4L178.1 118H178.2C178.344 117.72 178.511 117.452 178.7 117.2V117L179.2 116.2C179.206 116.123 179.242 116.051 179.3 116C179.371 115.707 179.508 115.433 179.7 115.2C179.695 115.146 179.702 115.091 179.719 115.04C179.736 114.988 179.764 114.941 179.8 114.9L180.4 112.6V112.4C180.4 112.1 180.5 111.8 180.5 111.5V110.1C180.516 109.764 180.483 109.427 180.4 109.1C180.381 108.759 180.314 108.422 180.2 108.1L179.9 107C179.9 106.9 179.8 106.9 179.8 106.8L179.5 105.9L178.9 104.9L169 87.3C167.997 85.4689 167.712 83.3299 168.2 81.3C168.481 80.2737 168.961 79.3127 169.613 78.472C170.265 77.6312 171.076 76.9272 172 76.4C173.831 75.3457 176.006 75.0589 178.048 75.6023C180.09 76.1456 181.835 77.475 182.9 79.3L202.9 114C207.397 121.721 210.314 130.259 211.482 139.117C212.649 147.976 212.043 156.978 209.7 165.6V165.6ZM234 63.4C232.175 64.4505 230.106 65.0023 228 65C225.888 65.0221 223.809 64.477 221.98 63.4216C220.15 62.3663 218.638 60.8393 217.6 59C213.369 51.7122 207.301 45.6609 200.002 41.4498C192.703 37.2386 184.427 35.0148 176 35C172.817 35 169.765 33.7357 167.515 31.4853C165.264 29.2348 164 26.1826 164 23C164 19.8174 165.264 16.7652 167.515 14.5147C169.765 12.2643 172.817 11 176 11C188.64 11.0222 201.054 14.358 212.003 20.6747C222.952 26.9914 232.054 36.0682 238.4 47C239.966 49.7639 240.383 53.033 239.56 56.1014C238.736 59.1698 236.739 61.7913 234 63.4V63.4ZM76.1 247.7C74.9787 249.051 73.5723 250.137 71.9817 250.881C70.3911 251.624 68.6557 252.006 66.9 252C64.0843 251.999 61.3587 251.008 59.2 249.2C47.3809 239.285 37.3958 227.371 29.7 214C28.1087 211.242 27.6783 207.964 28.5034 204.889C29.3286 201.813 31.3417 199.191 34.1 197.6C36.8582 196.009 40.1356 195.578 43.2112 196.403C46.2868 197.229 48.9087 199.242 50.5 202C56.8182 212.914 64.971 222.657 74.6 230.8C75.8192 231.804 76.8265 233.04 77.5631 234.437C78.2998 235.833 78.7511 237.363 78.8907 238.936C79.0303 240.509 78.8555 242.094 78.3763 243.598C77.8972 245.103 77.1234 246.497 76.1 247.7V247.7Z" />
                </svg>
              </span>
            </h1>
            <div>
              <p className="noselect text-md my-2 text-center md:text-left md:text-lg">
                I&apos;m a <i>prigrimir</i> who make the computer goes beep
                boop... Currently, I&apos;m focusing on learning about front-end
                developer and UI/UX design.
              </p>
              <p>
                Checkout my{' '}
                <Link
                  href="/projects"
                  className="cursor-pointer relative z-20 font-bold underline decoration-black dark:decoration-white "
                >
                  past works
                </Link>{' '}
                or learn more{' '}
                <Link
                  href="/about"
                  className="cursor-pointer relative z-20 font-bold underline decoration-black dark:decoration-white "
                >
                  about me
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Home;
