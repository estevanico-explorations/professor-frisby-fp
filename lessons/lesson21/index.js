import Task from 'data.task'

// Find project by id wrap finding into a Task (Promise()-ish)
export const Db = {
  find: id =>
    new Task((rej, res) =>
      setTimeout(() =>
        res({ id: id, title: `Project ${id}` }), 100
    ))}

export const reportHeader = (p1, p2) => `Report: ${p1.title} compared to ${p2.title}`

