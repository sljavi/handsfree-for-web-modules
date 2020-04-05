import $ from 'jquery';
import { getNumber } from './helpers/number-helpers';
import { executeBackgroundAction } from './helpers/background';
import { langs } from './helpers/language-list';
import scroll from './helpers/scroll';

function getScrollContainer(rootElement) {
  return $(rootElement.querySelector('.dialog .body'));
}

function down({ rootElement }) {
  scroll.down(getScrollContainer(rootElement));
}

function up({ rootElement }) {
  scroll.up(getScrollContainer(rootElement));
}

function reviewCommand({ commandName }) {
  const number = getNumber(commandName);
  if (number && number > 0 && number <= langs.length) {
    const selectedLang = langs[number - 1].value;
    executeBackgroundAction({
      setEnterTextLanguage: selectedLang,
    });
    return {
      commandWasExecuted: true,
      langs,
      selectedLang,
    };
  }
  return undefined;
}

function setup() {
  return {
    langs,
  };
}

export default {
  name: 'i18n-name',
  description: 'i18n-description',
  icon: 'fa fa-globe',
  contexts: [{
    context: 'root',
    commands: [{
      name: 'i18n-command.changeLanguage',
      group: 'i18n-group.changeLanguage',
      help: 'i18n-help.changeLanguage',
      action: () => {},
      switchToContext: 'languages',
    }],
    i18n: {
      en: {
        'command.changeLanguage': 'change language',
        'group.changeLanguage': 'Introduce text language',
        'help.changeLanguage': 'Opens introduce text language selector',
      },
      es: {
        'command.changeLanguage': 'cambiar idioma',
        'group.changeLanguage': 'Lenguaje de introducción de texto',
        'help.changeLanguage': 'Permite cambiar el lenguage de introducción de texto',
      },
      pt: {
        'command.changeLanguage': 'mudar idioma',
        'group.changeLanguage': 'Introduzir a Linguagem de Texto',
        'help.changeLanguage': 'Abre o Seletor de Idioma de Texto',
      },
      yue: {
        'command.changeLanguage': 'change language',
        'group.changeLanguage': 'Introduce text language',
        'help.changeLanguage': 'Opens introduce text language selector',
      },
    },
  }, {
    context: 'introduceText',
    commands: [{
      name: 'i18n-command.changeLanguage',
      group: 'i18n-group.changeLanguage',
      help: 'i18n-help.changeLanguage',
      action: () => {},
      switchToContext: 'languages',
    }],
    i18n: {
      en: {
        'command.changeLanguage': 'change language',
        'group.changeLanguage': 'Introduce text language',
        'help.changeLanguage': 'Opens introduce text language selector',
      },
      es: {
        'command.changeLanguage': 'cambiar idioma',
        'group.changeLanguage': 'Lenguaje de introducción de texto',
        'help.changeLanguage': 'Permite cambiar el lenguage de introducción de texto',
      },
      pt: {
        'command.changeLanguage': 'mudar idioma',
        'group.changeLanguage': 'introduzir a Linguagem de Texto',
        'help.changeLanguage': 'Abre o Seletor de Idioma de Texto',
      },
      yue: {
        'command.changeLanguage': 'change language',
        'group.changeLanguage': 'Introduce text language',
        'help.changeLanguage': 'Opens introduce text language selector',
      },
    },
  }, {
    context: 'languages',
    name: 'i18n-name',
    setup,
    commands: [{
      name: 'i18n-command.scroll-up',
      action: up,
      group: 'i18n-group.scroll-up',
      help: 'i18n-help.scroll-up',
    }, {
      name: 'i18n-command.scroll-down',
      action: down,
      group: 'i18n-group.scroll-down',
      help: 'i18n-help.scroll-down',
    }, {
      name: '*',
      help: 'i18n-help.*',
      action: reviewCommand,
    }],
    i18n: {
      en: {
        name: 'Change Language',
        'command.scroll-up': 'scroll up',
        'group.scroll-up': 'Scroll',
        'help.scroll-up': 'Performs a scroll up of the list',
        'command.scroll-down': 'scroll down',
        'help.scroll-down': 'Performs a scroll down of the list',
        'group.scroll-down': 'Scroll',
        'scroll-up': 'Scroll Up',
        'scroll-down': 'Scroll Down',
        open: 'Open',
        delete: 'Delete',
        exit: 'Exit',
        'help.*': 'Select a language',
      },
      es: {
        name: 'Cambiar Idioma',
        'command.scroll-up': 'subir',
        'group.scroll-up': 'Desplazarse',
        'help.scroll-up': 'Desplazar la lista de hacia arriba',
        'command.scroll-down': 'bajar',
        'group.scroll-down': 'Desplazarse',
        'help.scroll-down': 'Desplazar la lista hacia abajo',
        'scroll-up': 'Subir',
        open: 'Abrir',
        exit: 'Salir',
        'scroll-down': 'Bajar',
        delete: 'Eliminar',
        'help.*': 'Seleccionar un lenguaje',
      },
      pt: {
        name: 'Mudar Idioma',
        'command.scroll-up': 'rolar para cima',
        'group.scroll-up': 'Rolar',
        'help.scroll-up': 'Rolar para cima na lista',
        'command.scroll-down': 'rolar para baixo',
        'help.scroll-down': 'Rolar para baixo na lista',
        'group.scroll-down': 'Rolar',
        'scroll-up': 'Rolar Para Cima',
        'scroll-down': 'Rolar Para Baixo',
        open: 'Abrir',
        delete: 'Deletar',
        exit: 'Sair',
        'help.*': 'Selecionar o Idioma',
      },
      yue: {
        name: 'Change Language',
        'command.scroll-up': 'scroll up',
        'group.scroll-up': 'Scroll',
        'help.scroll-up': 'Performs a scroll up of the list',
        'command.scroll-down': 'scroll down',
        'help.scroll-down': 'Performs a scroll down of the list',
        'group.scroll-down': 'Scroll',
        'scroll-up': 'Scroll Up',
        'scroll-down': 'Scroll Down',
        open: 'Open',
        delete: 'Delete',
        exit: 'Exit',
        'help.*': 'Select a language',
      },
    },
  }],
  i18n: {
    en: {
      name: 'Change Language',
      description: 'Pick a different introduce text language',
    },
    es: {
      name: 'Cambiar idioma',
      description: 'Cambia el idioma de introducción de texto',
    },
    pt: {
      name: 'Mudar Idioma',
      description: 'Selecione o idioma desejado para a digitação de texto.',
    },
    yue: {
      name: 'Change Language',
      description: 'Pick a different introduce text language',
    },
  },
};
