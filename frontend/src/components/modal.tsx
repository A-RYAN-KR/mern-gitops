import React from 'react';
import { imageUrls } from '@/constants/images';
interface ModalProps {
  selectedImage: string;
  modal: boolean;
  handleImageSelect: (imageUrl: string) => void;
  handleSelector: () => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalComponent: React.FC<ModalProps> = ({
  selectedImage,
  handleImageSelect,
  handleSelector,
  setModal,
  modal,
}) => {
  return (
    <>
      {modal && (
        <div
          className="relative z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Blur Backdrop */}
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"></div>

          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {/* Modal Box */}
              <div className="relative transform overflow-hidden rounded-2xl border border-white/10 bg-[#131520] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-6 pt-6 pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full text-center sm:text-left">
                      <h3
                        className="text-base font-bold text-white tracking-tight"
                        id="modal-title"
                      >
                        Choose a post cover image
                      </h3>
                      
                      <div className="mt-4">
                        <div className="grid grid-cols-3 gap-3">
                          {imageUrls.map((imageUrl) => (
                            <div
                              key={imageUrl}
                              className={`aspect-square cursor-pointer overflow-hidden rounded-xl transition-all duration-300 ${
                                selectedImage === imageUrl
                                  ? 'border-2 border-brand-violet ring-4 ring-brand-violet/20 scale-[1.02]'
                                  : 'border border-white/5 opacity-70 hover:opacity-100 hover:scale-[1.02]'
                              }`}
                              onClick={() => handleImageSelect(imageUrl)}
                            >
                              <img
                                src={imageUrl}
                                alt="Cover option"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Footer Buttons */}
                <div className="px-6 py-4 bg-[#0a0b10]/40 border-t border-white/5 flex flex-col gap-2 sm:flex-row-reverse sm:gap-3">
                  <button
                    type="button"
                    name="imageLink"
                    className="inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-brand-violet to-brand-indigo hover:from-brand-violet/90 hover:to-brand-indigo/90 px-4 py-2.5 text-sm font-bold text-white shadow-md active:scale-95 transition-all sm:w-auto"
                    onClick={handleSelector}
                  >
                    Select Cover
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-xl bg-zinc-800 text-zinc-300 hover:bg-zinc-700 px-4 py-2.5 text-sm font-semibold border border-white/5 active:scale-95 transition-all sm:w-auto"
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
