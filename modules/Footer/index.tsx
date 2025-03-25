import { useTranslations } from 'next-intl'
import React from 'react'

const Footer = () => {
    const t = useTranslations("footer")
  return (
    <div className='containers !my-[40px] !py-[50px] flex'>
      <div>
        <p>{t("networking")}</p>
        {t("install")}
      </div>
      <div>
      {t("menyu")}
        {t("ashyoAbout")}
        {t("useCondition")}
        {t("privacy")}
        {t("categoryProduct")}
        {t("ourCall")}
      </div>
      <div>
      {t("call")}
      <p>+998 (71) 123-45-67</p>
        {t("question")}
        {t("placeholder")}
      </div>
    </div>
  )
}

export default Footer
