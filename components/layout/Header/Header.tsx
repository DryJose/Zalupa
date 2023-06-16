import { useEffect, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from 'next-i18next'
//local libs
import { LocaleSwitcher } from 'components/generic'
import { HeaderContainer } from "./styles";
import { links } from "./accets/fixtures";
import { LinkList, ListItem, Link } from "./styles";

export const Header = () => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

useEffect(() => {
  const callback = () => {
     if (window.pageYOffset > 0) setIsScrolled(true)
    else setIsScrolled(false) 
  }

 window.addEventListener("scroll", callback);

 return () => {
  window.removeEventListener("scroll", callback)
 }
}, [])


  return (
    <HeaderContainer isSrolled={isScrolled}>
      <NextLink href="/">
        <a>
          <Image src="/logo.svg" width={300} height={130} alt="logo" />
        </a>
      </NextLink>

      <LinkList>
        {links.map((x) => (
          <ListItem key={x.i18nKey}>
            <Link href={x.href}>{t(x.i18nKey)}</Link>
          </ListItem>
        ))}
      </LinkList>

      <LocaleSwitcher />
    </HeaderContainer>
  );
};
