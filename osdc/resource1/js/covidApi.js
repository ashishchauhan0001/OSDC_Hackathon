const covidApi = {
    getSummary: async () => {
        return await fetchRequest(covidApiEndPoints.summary())
    },
    getWorldAllTimeCases: async () => {
        return await fetchRequest(covidApiEndPoints.worldAllTimeCases())
    },
    getCountryAllTimeCases: async (country, status) => {
        return await fetchRequest(covidApiEndPoints.countryAllTimeCases(country, status))
    },
    getWorldDaysCases: async () => {
        return await fetchRequest(covidApiEndPoints.worldDaysCases())
    },
    getCountryDaysCases: async (country, status) => {
        return await fetchRequest(covidApiEndPoints.countryDaysCases(country, status))
    }
}

const covid_api_base = 'https://api.covid19api.com/'

const covidApiEndPoints = {
    summary: () => {
        return getApiPath('summary')
    },
    worldAllTimeCases: () => {
        return getApiPath('world')
    },
    countryAllTimeCases: (country, status) => {
        let ep = `dayone/country/${country}/status/${status}`
        return getApiPath(ep)
    },
    countryDaysCases: (country, status) => {
        let da = getDaysRange(30)

        let ep = `country/${country}/status/${status}?from=${da.start_date}&to=${da.end_date}`

        return getApiPath(ep)
    },
    worldDaysCases: () => {
        let da = getDaysRange(30)

        let ep = `world?from=${da.start_date}&to=${da.end_date}`

        return getApiPath(ep)
    }
}
getDaysRange = (days) => {
    let d = new Date()

    let fd = new Date(d.getTime() - (days * 24 * 60 * 60 * 1000))

    let td = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`

    let fde = `${fd.getFullYear()}-${fd.getMonth() + 1}-${fd.getDate()}`

    return {
        start_date: fde,
        end_date: td
    }
}

getApiPath = (ep) => {
    return covid_api_base + ep
}