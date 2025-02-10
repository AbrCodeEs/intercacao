"use client"

import { useEffect, useRef, useState } from 'react'
import { type Blendy, createBlendy } from 'blendy'
import { createPortal } from 'react-dom'

function App({ children }: { children: React.ReactNode }) {
    const blendy = useRef<Blendy | null>(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        blendy.current = createBlendy({ animation: 'spring' })
    }, [])

    return (
        <div>
            {showModal
                && createPortal(<Modal onClose={() => {
                    blendy.current?.untoggle('example', () => {
                        setShowModal(false)
                    })
                }}>
                    {children}

                </Modal>, document.body)
            }
            <button data-blendy-from="example" onClick={() => {
                setShowModal(true)
                blendy.current?.toggle('example')
            }}>
                {children}
            </button>
        </div>
    )
}

function Modal({ onClose, children }: { onClose: React.MouseEventHandler<HTMLElement>, children: React.ReactNode }) {
    return (<>
        <div className='w-full h-full bg-black/50 fixed top-0 left-0 flex justify-center items-center' data-blendy-to="example" >
            <div className='w-2/4 h-3/4 flex justify-center items-center bg-white relative rounded-2xl z-20'>
                <div className="absolute top-5 right-5 size-16">
                    <button className="cursor-pointer group size-16 z-20 relative before:content-[''] before:block before:h-px before:w-2/4 before:mx-auto before:bg-black before:relative before:transition-transform before:duration-300 before:transform before:-rotate-45  after:content-[''] after:block after:h-px after:w-2/4 after:mx-auto after:bg-black after:relative after:transition-transform after:duration-300  after:transform after:rotate-45" onClick={onClose}></button>
                </div>
                <div className="scale-160 shadow-md">
                    {children}
                </div>
            </div>
        </div>
    </>

    )
}

export default App