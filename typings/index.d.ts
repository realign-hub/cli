export interface IF_CmdItemOptions {
  pkg: any;
  env: 'terminal' | 'electron';
}

export interface IF_CmdCoreOpts {
  env: 'terminal' | 'electron';
}

export interface IF_LEVEL_DB_OBJ {
  path: string; // level path
  key: string; // level key
  storeType: string; // cmd store type
  setter: Function;
  getter: Function;
}
