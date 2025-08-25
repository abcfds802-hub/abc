/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs');

// Complete list of directories where npm should be executed to install node modules
// Modified to exclude all extensions as requested by user
const dirs = [
	'',
	'build',
	// All extension directories removed as user doesn't want extensions
	'remote',
	'remote/web',
	'test/automation',
	'test/integration/browser',
	'test/monaco',
	'test/smoke',
	'.vscode/extensions/vscode-selfhost-import-aid',
	'.vscode/extensions/vscode-selfhost-test-provider',
];

if (fs.existsSync(`${__dirname}/../../.build/distro/npm`)) {
	dirs.push('.build/distro/npm');
	dirs.push('.build/distro/npm/remote');
	dirs.push('.build/distro/npm/remote/web');
}

exports.dirs = dirs;
