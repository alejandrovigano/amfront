module.exports = res => ({
    created: resource => res.status(201).json(resource),
    updated: info => res.status(204).json(info),
    deleted: resource => res.status(200).json(resource),
    ok: resource => res.status(200).json(resource),
    asyncCreated: delayedData => res.status(204).json(delayedData),
    asyncDeleted: delayedData => res.status(204).json(delayedData),
    notFound: message => res.status(404).json(message),
    serverError: err => { res.status(500).json(err);},
    validationError: err => res.status(400).json(err),
    unauthorized: err => res.status(401).json(err),
    forbidden: err => res.status(403).json(err),
    badRequest: err => res.status(400).json(err)
});
