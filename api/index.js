//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

// const express = require('express');
// const multer = require('multer');
// const { sequelize, File } = require('./models');

// const app = express();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage });

// app.post('/api/upload', upload.single('file'), async (req, res) => {
//   try {
//     const { filename, mimetype } = req.file;
//     const file = await File.create({ filename, mimetype });
//     res.json({ message: 'File uploaded successfully', file });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error uploading file' });
//   }
// });

// sequelize.sync()
//   .then(() => {
//     app.listen(3000, () => console.log('Server started on port 3000'));
//   })
//   .catch(error => console.error(error));




// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydatabase');

// const File = sequelize.define('File', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   filename: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   mimetype: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// module.exports = { sequelize, File };


// MIME (Multipurpose Internet Mail Extensions) es un estándar de Internet que se utiliza para identificar los tipos de contenido de los archivos que se transmiten a través de la red. MIME permite que diferentes aplicaciones puedan interpretar correctamente los datos transmitidos, ya que proporciona información sobre el tipo de archivo (por ejemplo, texto, imagen, audio, video, etc.) y su formato (por ejemplo, HTML, JPEG, MP3, MP4, etc.).

// Los tipos MIME se representan mediante cadenas de texto que consisten en dos partes: el tipo de medio (por ejemplo, "text", "image", "audio", "video", etc.) y el subtipo (por ejemplo, "plain", "html", "jpeg", "mp3", "mp4", etc.). Estas cadenas se utilizan en los encabezados HTTP y en otros protocolos de Internet para indicar el tipo de contenido de un archivo. Por ejemplo, el tipo MIME para un archivo JPEG es "image/jpeg" y el tipo MIME para un archivo MP3 es "audio/mpeg".

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydatabase');

// const Activity = sequelize.define('Activity', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.TEXT,
//     allowNull: false
//   }
// });

// const File = sequelize.define('File', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   filename: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   mimetype: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// Activity.hasMany(File);
// File.belongsTo(Activity);

// module.exports = { sequelize, Activity, File };



// const { sequelize, Activity, File } = require('./models');

// sequelize.sync()
//   .then(async () => {
//     const activity = await Activity.create({
//       name: 'Actividad 1',
//       description: 'Descripción de la actividad 1'
//     });

//     const file1 = await File.create({
//       filename: 'archivo1.jpg',
//       mimetype: 'image/jpeg'
//     });

//     const file2 = await File.create({
//       filename: 'archivo2.jpg',
//       mimetype: 'image/jpeg'
//     });

//     await activity.addFile(file1);
//     await activity.addFile(file2);

//     console.log('Actividad creada con archivos asociados');
//   })
//   .catch(error => console.error(error));
