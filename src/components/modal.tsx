import { UseOpenI } from 'hooks/useOpen';
import React, { ReactNode } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
  modal: UseOpenI;
}
export const Modal = ({ title, children, modal }: ModalProps) => {
  const { isOpen, open } = modal;
  return (
    <>
      <button className="w-full bg-3-aquamarine hover:bg-4-azure text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={open}>
        Nuevo
      </button>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full p-6 my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">{children}</div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
