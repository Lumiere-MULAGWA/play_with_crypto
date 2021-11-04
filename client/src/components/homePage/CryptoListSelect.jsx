import React, { useState } from 'react'

export default function CryptoListSelect(props) {
    const [selected, setSelected] = useState(props.options[1])
    const [showOptionList, setShowOptionList] = useState(false)

    function handleSelect(e) {
        setShowOptionList(false)
        const optionIndex = e.target.getAttribute('index')
        setSelected(props.options[optionIndex])
        // Send to parent the new selected crypto base
        props.newSelect(props.options[optionIndex].base)
    }

    return (
        <div>
            <div className="select">
                <div className="selected" onClick={() => setShowOptionList(!showOptionList)}>
                    <img src={selected.icon} alt={selected.name + '-icon'} />
                    <div className="crypto-name">
                        <p className="name">{selected.name.charAt(0).toUpperCase() + selected.name.slice(1)}</p>
                        <p className="symbol">{selected.base}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20" d="M112 184l144 144 144-144"/></svg>
                </div>
            </div>
            {showOptionList && 
                <div className="option-list">
                    {props.options.map((crypto, index) => {
                        return <div className="option" key={index} index={index} onClick={handleSelect}>
                        <div className="crypto-name-container">
                            <img src={crypto.icon} index={index} alt={crypto.symbol.toLowerCase() + '-icon'} />
                            <div className="crypto-name" index={index}>
                                <p className="name" index={index}>{crypto.name.charAt(0).toUpperCase() + crypto.name.slice(1)}</p>
                                <p className="symbol" index={index}>{crypto.base}</p>
                            </div>
                        </div>
                        <div className="crypto-price-container">
                            {crypto.base !== 'EUR' && <p className="crypto-price" index={index}>1 {crypto.base} = {crypto.amount.substring(0, 8)}{crypto.symbol}</p>}
                        </div>
                    </div>
                    })}
                </div>
            }
        </div>
    )
}
