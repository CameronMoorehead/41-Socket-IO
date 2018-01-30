'use strict';

import { start } from './lib/server.js';

start({ PORT: process.env.PORT, MONGODB_URI: process.env.MONGODB_URI });
