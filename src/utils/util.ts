const digitsRE = /(\d{3})(?=\d)/g

function factPrice (value: string, discount: string): number {
    const val = parseFloat(value)
    const dis = parseFloat(discount)
    if (!dis) {
        return val
    } else {
        return val * dis
    }
}

function currency (value: string, currencys: string | null, decimals: number | null) : string {
    const val = parseFloat(value)
    if (!isFinite(val) || (!val && val !== 0)) {
        return ''
    }

    const curs = currencys != null ? currencys : '￥'
    const dics = decimals != null ? decimals : 2

    const stringified = Math.abs(val).toFixed(dics)
    const _int = dics ? stringified.slice(0, -1 - dics) : stringified
    const i = _int.length % 3
    const head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : ''
    const _float = dics ? stringified.slice(-1 - dics) : ''
    const sign = val < 0 ? '-' : ''
    return sign + curs + head + _int.slice(i).replace(digitsRE, '$1,') + _float
}

export { factPrice, currency }
