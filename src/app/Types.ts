export type Details = {
    info: {
        id: string,
        secret: string,
        server: string,
        farm: number,
        dateuploaded: string,
        isfavorite: number,
        license: string,
        safety_level: string,
        rotation: number,
        originalsecret: string,
        originalformat: string,
        owner: {
            nsid: string,
            username: string,
            realname: string,
            location: string,
            iconserver: string,
            iconfarm: number,
            path_alias: null | string,
            gift: {
                gift_eligible: boolean,
                eligible_durations: string[],
                new_flow: boolean
            }
        },
        title: {
            _content: string
        },
        description: {
            _content: string
        },
        visibility: {
            ispublic: number,
            isfriend: number,
            isfamily: number
        },
        dates: {
            posted: string,
            taken: string,
            takengranularity: number,
            takenunknown: number,
            lastupdate: string
        },
        views: string,
        editability: {
            cancomment: number,
            canaddmeta: number
        },
        publiceditability: {
            cancomment: number,
            canaddmeta: number
        },
        usage: {
            candownload: number,
            canblog: number,
            canprint: number,
            canshare: number
        },
        comments: {
            _content: string
        },
        notes: {
            note: any[]
        },
        people: {
            haspeople: number
        },
        tags: {
            tag: {
                id: string,
                author: string,
                authorname: string,
                raw: string,
                _content: string,
                machine_tag: number
            }[]
        },
        location: {
            latitude: string,
            longitude: string,
            accuracy: string,
            context: string,
            locality: {
                _content: string,
                woeid: number
            },
            county: {
                _content: string,
                woeid: number
            },
            region: {
                _content: string,
                woeid: number
            },
            country: {
                _content: string,
                woeid: number
            },
            neighbourhood: {
                _content: string,
                woeid: number
            }
        },
        geoperms: {
            ispublic: number,
            iscontact: number,
            isfriend: number,
            isfamily: number
        },
        urls: {
            url: {
                type: string,
                _content: string
            }[]
        },
        media: string
    },
    location: {
        latitude: string,
        longitude: string,
        accuracy: string,
        context: string,
        locality: {
            _content: string,
            woeid: number
        },
        county: {
            _content: string,
            woeid: number
        },
        region: {
            _content: string,
            woeid: number
        },
        country: {
            _content: string,
            woeid: number
        },
        neighbourhood: {
            _content: string,
            woeid: number
        }
    }
};
