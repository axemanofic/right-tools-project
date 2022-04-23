"""
Django settings for src project.

Generated by 'django-admin startproject' using Django 4.0.3.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""
import os
import sys
from datetime import timedelta
from pathlib import Path

import dotenv

dotenv.load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv('DEBUG', default=False)

ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    os.getenv('ALLOWED_HOST')
]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rt_app.apps.RtAppConfig',
    'rest_framework',
    'corsheaders',
    'drf_yasg',
    'rest_framework_simplejwt',
    'django_simple_logs',
    'django_bot_exceptions'
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django_simple_logs.middlewares.LoguruMiddleware',
    'django_bot_exceptions.middlewares.TelegramExceptionsMiddleware'
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases
POSTGRESQL_DATA = {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': os.getenv('NAME_DB'),
    'USER': os.getenv('USER_DB'),
    'PASSWORD': os.getenv('PASSWORD_DB'),
    'HOST': os.getenv('HOST_DB'),
    'PORT': os.getenv('PORT_DB'),
}

if DEBUG:
    DATABASES = {
        'default': {
            'ENGINE': POSTGRESQL_DATA.get('ENGINE'),
            'NAME': POSTGRESQL_DATA.get('NAME'),
            'USER': POSTGRESQL_DATA.get('USER'),
            'PASSWORD': POSTGRESQL_DATA.get('PASSWORD'),
            'HOST': POSTGRESQL_DATA.get('HOST'),
            'PORT': POSTGRESQL_DATA.get('PORT'),
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': POSTGRESQL_DATA.get('ENGINE'),
            'NAME': POSTGRESQL_DATA.get('NAME'),
            'USER': POSTGRESQL_DATA.get('USER'),
            'PASSWORD': POSTGRESQL_DATA.get('PASSWORD'),
            'HOST': POSTGRESQL_DATA.get('HOST'),
            'PORT': POSTGRESQL_DATA.get('PORT'),
        }
    }

PCYORG_CONFIG = f"dbname={POSTGRESQL_DATA.get('NAME')} user={POSTGRESQL_DATA.get('USER')} " \
                f"password={POSTGRESQL_DATA.get('PASSWORD')} port={POSTGRESQL_DATA.get('PORT')} " \
                f"host={POSTGRESQL_DATA.get('HOST')}"

# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'ru-ru'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / "static/"
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / "media/"

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'rt_app.User'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=12),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,
    'UPDATE_LAST_LOGIN': False,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,
    'JWK_URL': None,
    'LEEWAY': 0,

    'AUTH_HEADER_TYPES': ('Bearer',),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:8080",
    "http://127.0.0.1:8000",
    "http://localhost:3080",
    "http://127.0.0.1:3000",
]


DJANGO_SIMPLE_LOGS = {
    "LOGURU": {
        "handlers": [
            {
                "sink": sys.stdout,
                "filter": lambda record: record['level'].name == 'INFO',
                "format": '{time} | {level} | {message}',
            },
            {
                "sink": BASE_DIR / 'logs/error.log',
                "filter": lambda record: record['level'].name == 'ERROR',
                "format": '{time} | {level} | {message}',
                "rotation": '100 KB',
                "compression": 'zip',
            }
        ]
    }
}

TELEGRAM_BOT = {
    "TOKEN": os.getenv('TOKEN'),
    "CHATS": {
        '494061970'
    }
}
