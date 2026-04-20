import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const name = process.argv[2];

if (!name) {
  console.error('Usage: node scripts/create-core-module.mjs <module-name>');
  process.exit(1);
}

const base = join('features', 'core', 'src', 'modules', 'base', name);

const folders = [
  'application/dtos',
  'application/usecases',
  'application/ports',
  'domain/models',
  'domain/repositories',
  'domain/values',
];

const indexes = [
  'application/dtos/index.ts',
  'application/usecases/index.ts',
  'application/ports/index.ts',
  'application/index.ts',
  'domain/models/index.ts',
  'domain/repositories/index.ts',
  'domain/values/index.ts',
  'domain/index.ts',
  'index.ts',
];

const indexContents = {
  'application/index.ts': "export * from './dtos';\nexport * from './usecases';\nexport * from './ports';\n",
  'domain/index.ts': "export * from './models';\nexport * from './repositories';\nexport * from './values';\n",
  'index.ts': "export * from './application';\nexport * from './domain';\n",
};

// Buat folders
folders.forEach((f) => {
  const path = join(base, f);
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }

  // Tambah .gitkeep hanya jika belum ada file apapun di folder tersebut
  const gitkeepPath = join(path, '.gitkeep');
  if (!existsSync(gitkeepPath)) {
    writeFileSync(gitkeepPath, '');
  }
});

// Buat index files
indexes.forEach((f) => {
  const filePath = join(base, f);
  if (!existsSync(filePath)) {
    const content = indexContents[f] || '// export di sini\n';
    writeFileSync(filePath, content);
  }
});

console.log(`✅ Core Module "${name}" berhasil di-scaffold!`);
console.log(`👉 Lokasi: ${base}`);
