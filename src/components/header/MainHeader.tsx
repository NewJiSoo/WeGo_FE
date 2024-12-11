'use client';

import Link from 'next/link';
import LogoBlue from '@/assets/logo_blue.svg';
import LogoWhite from '@/assets/logo_white.svg';
import Mypage from '@/assets/mypage.svg';
import Write from '@/assets/write.svg';
import { throttle } from 'lodash';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const MainHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 280) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 300);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname === '/') {
    return (
      <header
        className={clsx(
          'fixed z-20 flex h-[60px] w-full items-center justify-between px-5 py-[14px] transition-all duration-300 ease-in-out',
          isScrolled
            ? 'bg-gradient-to-b from-transparent to-white backdrop-blur-lg'
            : '',
        )}
      >
        <Link href="/" aria-label="WEGO 로고">
          {isScrolled ? (
            <LogoBlue
              width={80}
              height={32}
              className={
                isScrolled ? 'text-label-normal' : 'text-primary-white'
              }
            />
          ) : (
            <LogoWhite
              width={80}
              height={32}
              className={
                isScrolled ? 'text-label-normal' : 'text-primary-white'
              }
            />
          )}
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="모임 만들기">
            <Write
              width={24}
              height={24}
              className={
                isScrolled ? 'text-label-normal' : 'text-primary-white'
              }
            />
          </Link>
          <Link href="/mypage" aria-label="마이페이지로 가기">
            <Mypage
              width={24}
              height={24}
              className={
                isScrolled ? 'text-label-normal' : 'text-primary-white'
              }
            />
          </Link>
        </div>
      </header>
    );
  }
  return null;
};
export default MainHeader;
