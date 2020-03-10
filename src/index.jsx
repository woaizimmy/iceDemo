import React from 'react';
import ReactDOM from 'react-dom';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';

// 引入默认全局样式
import '@alifd/next/reset.scss';
import './global.scss';

// 引入基础配置文件
import router from './router';
import LanguageProvider from './components/LocaleProvider';
import { getLocale } from './utils/locale';

const locale = getLocale();


if (isInIcestark()) {
  registerAppEnter(() => {
    ReactDOM.render(router(), getMountNode());
  });
  registerAppLeave(() => {
    ReactDOM.unmountComponentAtNode(getMountNode());
  });
} else {
  ReactDOM.render(
    <LanguageProvider locale={locale}>
      {router()}
    </LanguageProvider>,
    document.getElementById('ice-container')
  );
}


