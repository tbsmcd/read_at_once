<?php

class read_at_once extends rcube_plugin
{
    public $task = 'mail';

    function init()
    {
        $this->include_script('js/read_at_once.js');
        $this->include_stylesheet('css/read_at_once.css');
    }
}