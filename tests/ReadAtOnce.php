<?php

class ReadAtOnce extends \PHPUnit\Framework\TestCase
{
    private $plugin;

    function setUp()
    {
        include_once __DIR__ . '/../read_at_once.php';
        $rcube  = rcube::get_instance();
        $this->plugin = new read_at_once($rcube->api);
    }

    /**
     * Plugin object construction test
     */
    public function test_constructor()
    {
        $this->assertInstanceOf('read_at_once', $this->plugin);
        $this->assertInstanceOf('rcube_plugin', $this->plugin);
    }
}
