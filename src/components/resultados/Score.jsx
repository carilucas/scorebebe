import React from 'react'

const Score = ( {resultado, formularioCinco, formularioSeis} ) => {
    return (
        <div className="score flex-1">
            <h1 className='text-gray-900 mb-4 font-bold text-lg text-center'>Score del Neonato</h1>
            <div className="flex justify-center">
                <div 
                    className={`score-circle text-7xl font-bold text-center border-4 rounded-full w-[150px] h-[150px] flex justify-center items-center 
                    ${ 
                        (!formularioCinco && !formularioSeis) ?'border-red-800'
                        :resultado >= 77 ? 'border-red-800' 
                        :(resultado >= 71 && resultado < 77) ?
                        'border-yellow-600' 
                        :(resultado >= 67 && resultado < 72) ?
                        'border-green-600'
                        :'border-blue-400'
                    }`
                    }
                >
                    <span 
                        className={`text-blue-400
                            ${ 
                                (!formularioCinco && !formularioSeis) ?'text-red-800'
                                :resultado >= 77 ? 'text-red-800' 
                                :(resultado >= 71 && resultado < 77) ?
                                'text-yellow-600' 
                                :(resultado >= 67 && resultado < 72) ?
                                'text-green-600'
                                :'text-blue-400'
                            }
                        `}
                    >
                            {resultado}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Score
