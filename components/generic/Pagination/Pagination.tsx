import { useCallback } from "react";
import { PaginationContainer } from "./styles";
import { Button } from "components/generic/Button";
import { Current } from "./styles";
import { useTranslation } from "next-i18next";
// types
import { PaginationProps } from "./types";
import { useRouter } from "next/router";

export const Pagination = ({ count, previous, next }: PaginationProps) => {
  const { t } = useTranslation('pagination')
  const { push } = useRouter();

  const handleClickPrevious = useCallback(() => {
    push(`/?offset=${previous}`);
  }, [previous, push]);

  const handleClickNext = useCallback(() => {
    push(`/?offset=${next}`);
  }, [next, push]);
  
  return (
    <PaginationContainer>
      <Button 
        onClick={handleClickPrevious} 
        // disabled={typeof previous !== 'number' && !previous}>
       disabled={previous === null}
       >
        {t('pervious')}
      </Button>
      <Current>
        {next
          ? // `${t('from')} ${next - 20} ${t('to')} ${next} ${t('of')} ${count}`
          t('paginationStatus', {
            from: next -20,
            to: next,
            of: count,
          })
          : previous
          ? // `from ${previous + 20} to ${previous + 40} of ${count}`
          t('paginationStatus', {
            from: previous +20,
            to: previous +40,
            of: count,
          })
          : null}
      </Current>
      <Button onClick={handleClickNext} disabled={!next}>
        {t('next')}
      </Button>
    </PaginationContainer>
  );
};
