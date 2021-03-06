import { version } from '../../package.json'
import { Router } from 'express'
import files from './files'
import logs from './logs'
import search from './search'
import stats from './stats'
import thumbs from './thumbs'
import tags from './tags'

export default ({ config, storage }) => {
	let api = Router()

	api.use('/files', files({ config, storage }))
	api.use('/logs', logs({ config, storage }))
	api.use('/search', search({ config, storage }))
	api.use('/stats', stats({ config, storage }))
	api.use('/thumbs', thumbs({ config, storage }))
	api.use('/tags', tags({ config, storage }))

	api.get('/', (req, res) => {
		res.json({
			version: version,				
			analyticsToken: config.analyticsToken,			
			uiLang: config.uiLang,
			rawConfig: config
		})
	})

	return api
}
