db.createUser({
    user: "coverage_user",
    pwd: "C0v3R4G3UnCUs3RKzDtLf0n1T0s",
    roles: [{
        role: "readWrite",
        db: "coverage_db"
    }]
})
