import { logging } from '@angular-devkit/core';
import * as fse from 'fs-extra';

import { Schema } from '../deploy/schema';

// TODO: add your deploy code here!
export async function run(dir: string, options: Schema, logger: logging.LoggerApi) {

  try {

    if (!options.targetDir) {
      throw new Error('Please provide a target directory!');
    }

    if (await !fse.pathExists(options.targetDir)) {
      throw new Error(`Target directory ${ options.targetDir } does not exist!`);
    }

    await fse.copy(dir, options.targetDir)

    logger.info('🚀 Successfully published via ngx-deploy-starter! Have a nice day!');
  }
  catch (error) {
    logger.error('❌ An error occurred!');
    throw error;
  }
};