import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function start() {
	const PORT = process.env.PORT || 5000
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle('nest')
		.setDescription('REST API')
		.setVersion('1.0.0')
		.addTag('API documentation')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/docs', app, document)

	// app.useGlobalPipes(new ValidationPipe())

	await app.listen(PORT, () => {
		console.log(`server started ${PORT}`)
	})
}

start()
