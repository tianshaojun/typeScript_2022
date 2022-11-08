// console.log('123')

enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
}
console.log(Status.OFFLINE, Status.ONLINE, Status.DELETED, Status[0])

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2,
// }

function getResult(status) {
  if (status === Status.OFFLINE) {
    return 'offline'
  } else if (status === Status.ONLINE) {
    return 'online'
  } else if (status === Status.DELETED) {
    return 'deleted'
  }
  return 'error'
}

const result = getResult(Status.OFFLINE)
console.log(result)
