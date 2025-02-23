#!/bin/bash

source "$(dirname "$0")/to_pascal_case.sh"

# Проверяем, передан ли хотя бы один аргумент
if [ $# -lt 1 ]; then
    echo "Использование: $0 <имя_папки> [имя_файла]"
    exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# Название папки из первого аргумента
FOLDER_NAME="$1"
ROOT_FOLDER_PATH="$PROJECT_ROOT/src/widgets"
FOLDER_PATH="$ROOT_FOLDER_PATH/$FOLDER_NAME"

# Название файла, если не передан второй аргумент, используем имя папки
FILE_NAME="${2:-$FOLDER_NAME}"
EXTENSION=".tsx"

# Сниппет кода
CODE_SNIPPET="export const $(to_pascal_case "$FILE_NAME") = () => {
  return (
    <article></article>
  );
}"

# Создание папки
mkdir -p "$FOLDER_PATH"

# Создание файлов
#touch "$FOLDER_PATH/$FILE_NAME$EXTENSION"
#touch "$FOLDER_PATH/index.ts"

# Запись сниппета кода в файл
echo "$CODE_SNIPPET" >> "$FOLDER_PATH/$FILE_NAME$EXTENSION"
echo "export * from './$FILE_NAME'" >> "$FOLDER_PATH/index.ts"
echo "export * from './$FOLDER_NAME'" >> "$ROOT_FOLDER_PATH/index.ts"