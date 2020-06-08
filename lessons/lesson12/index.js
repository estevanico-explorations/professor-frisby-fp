import Task from 'data.task'

export const launchMissiles = () => 
  new Task((rej, res) => {
  // In order to fail it use the rej function just like a propmise.
  res('missile')
})
