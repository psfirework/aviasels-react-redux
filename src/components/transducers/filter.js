
export const filtersToState = (filters, tickets) => {
    const filterArr = [];

    for(let k in filters) {
        if(filters[k]) {
            filterArr.push(k)
        }
    }
    if(filterArr.length === 0) {
        filterArr.push('all')
    }


    const arr = filterArr.map((item) => {
        if (item.includes('withoutChange')) {
            return  item = '0';
        }
        if (item.includes('one')) {
            return  item = '1';
        }
        if (item.includes('two')) {
            return  item = '2';
        }
        if (item.includes('three')) {
            return  item = '3';
        }
        if (item.includes('all')) {
            return  item = 'all';
        }
    })
    arr.forEach(filter => {
        const res = tickets.filter(ticket => {
            if (filter.includes(ticket.stops)) {
                return filterArr.push(filter)
            }
        })

    })
    return filterArr
}

