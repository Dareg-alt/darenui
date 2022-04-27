import { cx } from '@daren/utils'
import { Dialog, Transition } from '@headlessui/react'

import {
  ExclamationIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid'
import * as React from 'react'

interface ModalProps {
  type: 'danger' | 'warning' | 'success' | 'info'
  title?: string
  description?: React.ReactNode
  className?: string
  open: boolean
  onClose(value: boolean): void
  initialFocus?: React.MutableRefObject<null>
  actions?: React.ReactNode
}

const IconMap: Record<ModalProps['type'], React.ElementType> = {
  danger: XCircleIcon,
  warning: ExclamationIcon,
  success: CheckCircleIcon,
  info: InformationCircleIcon,
}

function Modal({
  type = 'info',
  title,
  description,
  className,
  open,
  onClose,
  initialFocus,
  actions,
}: ModalProps) {
  const Icon = IconMap[type]

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="overflow-y-auto fixed inset-0 z-10"
        initialFocus={initialFocus}
        onClose={onClose}
      >
        <div className="flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-50 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={cx(
                className,
                'inline-block overflow-hidden relative px-4 pt-5 pb-4 text-left align-bottom bg-white rounded-lg shadow-xl transition-all sm:p-6 sm:my-8 sm:w-full sm:max-w-lg sm:align-middle',
              )}
            >
              <div className="sm:flex sm:items-start">
                <div
                  className={cx(
                    'flex shrink-0 justify-center items-center mx-auto w-12 h-12 rounded-full sm:mx-0 sm:w-10 sm:h-10',
                    {
                      'bg-yellow-100': type === 'warning',
                      'bg-green-100': type === 'success',
                      'bg-blue-100': type === 'info',
                      'bg-red-100': type === 'danger',
                    },
                  )}
                >
                  <Icon
                    className={cx('w-6 h-6', {
                      'text-yellow-400': type === 'warning',
                      'text-green-400': type === 'success',
                      'text-blue-400': type === 'info',
                      'text-red-400': type === 'danger',
                    })}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className={cx('text-lg font-medium leading-6', {
                      'text-yellow-400': type === 'warning',
                      'text-green-400': type === 'success',
                      'text-blue-400': type === 'info',
                      'text-red-400': type === 'danger',
                    })}
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-6">
                    <p className="text-sm text-secondary">{description}</p>
                  </div>
                </div>
              </div>
              {actions && (
                <div className="mt-6 sm:flex sm:pl-4 sm:mt-4 sm:ml-10">
                  <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    {actions}
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export { Modal }
