
#-----------------------------
# Source some stuff
#-----------------------------
if [[ -f /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh ]]; then
  . /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
fi

#------------------------------
# Even better ls, grc, wal, ccat (color stuff)
#------------------------------
(wal -r &)

[[ -s "/etc/grc.zsh" ]] && source /etc/grc.zsh

LS_COLORS=$(ls_colors_generator)
run_ls() {  ls-i --color=auto -w $(tput cols) "$@"  }
run_dir() {  dir-i --color=auto -w $(tput cols) "$@"  }
run_vdir() {  vdir-i --color=auto -w $(tput cols) "$@"  }
alias ls="run_ls"
alias dir="run_dir"
alias vdir="run_vdir"
export LS_COLORS

alias grep="grep --color=auto"
alias cat="ccat"

#------------------------------
# History stuff
#------------------------------
setopt append_history
HISTFILE=~/.config/zsh/.histfile
HISTSIZE=1000
SAVEHIST=1000

#------------------------------
# Prompt 
#------------------------------
autoload -U promptinit && promptinit
prompt walters

#------------------------------
# Virtualenv/Python 
#------------------------------
source /usr/bin/virtualenvwrapper.sh
WORKON_HOME=~/.virtualenvs

#------------------------------
# Variables
#------------------------------
export BROWSER="_/.local/bin/firefox-nightly"
export EDITOR="nvim"
PATH="$HOME/.local/lib/.node_modules/bin:$PATH"
export npm_config_prefix=~/.local/lib/.node_modules

if ! [[ "${PATH}" =~ "^${HOME}/.local/bin" ]]; then
        export PATH="${HOME}/.local/bin:${PATH}"
fi

#------------------------------
# Comp stuff
#------------------------------
plugins=(zsh-completions)
autoload -U compinit && compinit
zmodload zsh/complist
autoload -U compinit && compinit

zstyle ':completion:::::' completer _complete _approximate

zstyle ':completion:*:descriptions' format "- %d -"
zstyle ':completion:*:corrections' format "- %d - (errors %e})"
zstyle ':completion:*:default' list-prompt '%S%M matches%s'
zstyle ':completion:*' group-name ''
zstyle ':completion:*:manuals' separate-sections true
zstyle ':completion:*:manuals.(^1*)' insert-sections true
zstyle ':completion:*' menu select
zstyle ':completion:*' verbose yes

zstyle -e ':completion:*:approximate:*' max-errors 'reply=( $(( ($#PREFIX + $#SUFFIX) / 3 )) )'
zstyle ':completion::approximate*:*' prefix-needed false

#------------------------------
# Alias stuff
#------------------------------
# ls
alias ll="ls -lh"
alias la="ls -a"
# cd
alias cd..="cd .."
alias cd.="cd .."
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias .....="cd ../../../.."
alias ......="cd ../../../../.."
alias .......="cd ../../../../../.."
# gtop
alias gtop="LANG=en_US.utf8 TERM=xterm-256color gtop"
# dots
alias config="/usr/bin/git --git-dir=$HOME/.dots/ --work-tree=$HOME"
# vim
alias vim="nvim"
# tar
alias tarx="tar -xvf"


