import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { TypeOfTag } from 'typescript';
import './App.css';
import ReduxToolkitWrapper from './components/posts/ReduxToolkitWrapper';

// const MOBX = <MobxPostListWrapper />;
const RTK =<ReduxToolkitWrapper />;
// const RECOIL = <RecoilWrapper />;

const App = () => {
  return RTK
}

export default App;
