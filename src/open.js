import openUrl from './helpers/open-url';
import { searchSomething } from './search';
import { executeBackgroundAction } from './helpers/background';

function reviewCommand({ commandName }) {
  if (commandName.includes('.')) {
    executeBackgroundAction({
      disableEnterText: true,
    });
    openUrl(`http://${commandName.replace(/ /g, '')}`);
    return {
      commandWasExecuted: true,
    };
  }
  return searchSomething({ commandName });
}

function setup() {
  executeBackgroundAction({
    activeEnterText: true,
  });
}

function teardown() {
  executeBackgroundAction({
    disableEnterText: true,
  });
}

export default {
  name: 'i18n-name',
  description: 'i18n-description',
  icon: 'fa fa-external-link',
  contexts: [{
    context: 'root',
    commands: [{
      name: 'i18n-command.open',
      help: 'i18n-help.open',
      action: () => {},
      switchToContext: 'open',
      group: 'i18n-group.open',
    }],
    i18n: {
      en: {
        'command.open': 'open',
        'help.open': 'Open a website',
        'group.open': 'Open',
      },
      es: {
        'command.open': 'abrir',
        'help.open': 'Abrir un sitio web',
        'group.open': 'Abrir',
      },
      pt: {
        'command.open': 'abrir',
        'help.open': 'Abra um Site',
        'group.open': 'Abrir',
      },
    },
  }, {
    context: 'open',
    name: 'i18n-name',
    setup,
    teardown,
    commands: [{
      name: '*',
      help: 'i18n-help.*',
      group: 'i18n-group',
      action: reviewCommand,
      switchToContext: 'root',
    }],
    i18n: {
      en: {
        name: 'Open',
        'help.*': 'Say the name of the site you want to open',
        group: 'Open',
        'open-params': 'Say the name of the site you want to open',
        exit: 'Exit',
      },
      es: {
        name: 'Abrir',
        'help.*': 'Solicita la dirección a cargar',
        group: 'Abrir',
        'open-params': 'Indica el nombre del sitio que quieres abrir',
        exit: 'Salir',
      },
      pt: {
        name: 'Abrir',
        'help.*': 'Diga o nome do site que você deseja abrir',
        group: 'Abrir',
        'open-params': 'Diga o nome do site que você deseja abrir',
        exit: 'Sair',
      },
    },
  }],
  i18n: {
    en: {
      name: 'Open a website',
      description: 'This module allows you to open websites.',
    },
    es: {
      name: 'Abrir un sitio web',
      description: 'Este módulo permite acceder a un sitio web.',
    },
    pt: {
      name: 'Abrir um Site',
      description: 'Este módulo permite que você abra sites.',
    },
  },
};
