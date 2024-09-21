async function register ({ transcodingManager }) {

  // Output options
  {
    {
      const builder = () => {
        return {
          outputOptions: [
            '-r 10'
          ]
        }
      }

      transcodingManager.addVODProfile('libvpx-vp9', 'low-vod', builder)
    }

    {
      const builder = (options) => {
        return {
          outputOptions: [
            '-r:' + options.streamNum + ' 50'
          ]
        }
      }

      transcodingManager.addLiveProfile('libvpx-vp9', 'high-live', builder)
    }
  }

  // Input options
  {
    {
      const builder = () => {
        return {
          inputOptions: [
            '-r 5'
          ]
        }
      }

      transcodingManager.addVODProfile('libvpx-vp9', 'input-options-vod', builder)
    }

    {
      const builder = () => {
        return {
          inputOptions: [
            '-r 50'
          ]
        }
      }

      transcodingManager.addLiveProfile('libvpx-vp9', 'input-options-live', builder)
    }
  }

  // Scale filters
  {
    {
      const builder = () => {
        return {
          scaleFilter: {
            name: 'Glomgold'
          }
        }
      }

      transcodingManager.addVODProfile('libvpx-vp9', 'bad-scale-vod', builder)
    }

    {
      const builder = () => {
        return {
          scaleFilter: {
            name: 'Flintheart'
          }
        }
      }

      transcodingManager.addLiveProfile('libvpx-vp9', 'bad-scale-live', builder)
    }
  }
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
