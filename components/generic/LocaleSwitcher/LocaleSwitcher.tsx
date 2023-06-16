import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '../Button'
import { localeMapping } from './assets/fixtures'
import { Link } from './styles'
// types
import { Locales } from './types'

export const LocaleSwitcher = () => {
  // этот компонент будет работать коректно только при условии,
  // что локалей всего 2
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query, asPath } = router;
  const otherLocales = (locales as Locales)?.filter(
    (locale) => locale !== activeLocale
  );

  return (
    <NextLink
      href={{ pathname, query }}
      as={asPath}
      locale={otherLocales?.[0]}
      passHref
    >
      <Link>
        <Button>{localeMapping[otherLocales?.[0]]}</Button>
      </Link>
    </NextLink>
  );
};
