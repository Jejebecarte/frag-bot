<p align="center">
    An open-source frag running bot for Hypixel Skyblock dungeons.
</p>

> 🚨 USE AT YOUR OWN RISK:
> This application will log into Minecraft using Mineflayer, a Minecraft bot client. This may be against the rules of some servers and could result in punishment. In particular, frag running bots are at risk of being banned. All contributors to this repository are not liable for damages, and no warranty is provided under the [MIT License.](https://github.com/Jejebecarte/frag-bot/blob/master/LICENSE)

-   [Features](#features)
-   [Installation](#installation)
    -   [Prerequisites](#prerequisites)
    -   [Setup](#setup)
-   [Acknowledgements](#acknowledgements)
-   [License](#license)

## Features

-   Invite modes to manage bot access
-   Automatically joins and leaves parties
-   In-game whitelist management

## Installation

### Prerequisites

-   [Git](https://git-scm.com/downloads)
-   [NodeJS](https://nodejs.org/en/) >=16.6.0 and npm
-   A full access Minecraft Java Edition account

### Setup

1. ⭐ Star this repository!
2. Clone the repository into a directory of your choice:

```bash
$ git clone https://github.com/Jejebecarte/frag-bot.git
```

3. Enter the new directory and install packages:

```bash
$ cd frag-bot
$ npm install
```

4. Fill out the `.env.template` file with your credentials and rename it to `.env`.

5. Remove the `.template` file ending from `whitelist.json.template`

6. Build and run the bot.

```bash
$ npm run build
$ npm start
```

## Acknowledgements

Parts of this project contain code from the following repositories:

## License

This project is completely open-sourced under the [MIT License.](https://github.com/Jejebecarte/frag-bot/blob/main/LICENSE)
