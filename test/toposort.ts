import toposort from '../src/toposort'
import {expect} from 'chai'

describe('toposort', () => {
    let graph = [
        ['put on your shoes', 'tie your shoes']
        , ['put on your shirt', 'put on your jacket']
        , ['put on your shorts', 'put on your jacket']
        , ['put on your shorts', 'put on your shoes']
    ]

    let expected = [
      'put on your shirt', 'put on your shorts', 'put on your jacket', 'put on your shoes', 'tie your shoes'
    ]

    it('should sort topologically', () => {
        let sorted = toposort(graph)
        expect(sorted).to.eql(expected)
    })

})
