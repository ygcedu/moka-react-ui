import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  const openModal = () => {
    // modal 函数返回一个关闭弹框的函数定义
    const close = modal(<h1>你好
      <button onClick={() => close()}>close</button>
    </h1>);
  };
  return (
    <div>
      <div>
        <h1>example 1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x} buttons={
          [
            <button onClick={() => {setX(false);}}>1</button>,
            <button onClick={() => {setX(false);}}>2</button>,
          ]
        } onClose={() => {setX(false);}}>
          <strong>hi</strong>
        </Dialog>
      </div>

      <div>
        <h1>example 2</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog visible={y} closeOnClickMask={true} buttons={
          [
            <button onClick={() => {setY(false);}}>1</button>,
            <button onClick={() => {setY(false);}}>2</button>,
          ]
        } onClose={() => {setY(false);}}>
          <strong>hi</strong>
        </Dialog>
      </div>

      <div>
        <h1>example 3</h1>
        <button onClick={() => setZ(!z)}>click</button>
        <Dialog visible={z} enableMask={false} buttons={
          [
            <button onClick={() => {setZ(false);}}>1</button>,
            <button onClick={() => {setZ(false);}}>2</button>,
          ]
        } onClose={() => {setZ(false);}}>
          <strong>hi</strong>
        </Dialog>
      </div>

      <div>
        <h1>example 4</h1>
        <button onClick={() => alert('1')}>alert</button>
        <button onClick={() => confirm('1', () => {
          console.log('你点击了yes');
        }, () => {
          console.log('你点击了no');
        })}>confirm
        </button>
      </div>

      <div>
        <h1>example 5</h1>
        <button onClick={openModal}>modal
        </button>
      </div>
    </div>);
}
