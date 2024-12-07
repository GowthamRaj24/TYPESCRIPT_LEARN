/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const prisma = new PrismaClient().$extends(withAccelerate())

		const response = await prisma.log.create({
			data : {
			level : "10",
			message : "Hello World",
			meta : {
				headers : JSON.stringify(request.headers),
			}
		}
		})

		const logs = await prisma.log.findMany({
			take : 10,
			orderBy : {
				id : 'desc',
			},
		})

		console.log(JSON.stringify(logs));


		return  Response.json(response);
	},
} satisfies ExportedHandler<Env>;

