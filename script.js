snaas = function () {
    var selectedClass = 'selected';
    var nounsUlSelector = '#nouns';
    var verbsUlSelector = '#verbs';
    var nouns = {
        Attribute: 'Attribute',
        Base: 'Base',
        Bridge: 'Bridge',
        Bucket: 'Bucket',
        Chain: 'Chain',
        Collection: 'Collection',
        Configuration: 'Configuration',
        Context: 'Context',
        Command: 'Command',
        Composite: 'Composite',
        Element: 'Element',
        Entity: 'Entity',
        Exception: 'Exception',
        Field: 'Field',
        Flag: 'Flag',
        Flyweight: 'Flyweight',
        Identity: 'Identity',
        Info: 'Info',
        Item: 'Item',
        Key: 'Key',
        Method: 'Method',
        Node: 'Node',
        NullObject: 'NullObject',
        Option: 'Option',
        Proxy: 'Proxy',
        Protocol: 'Protocol',
        Peer: 'Peer',
        QueryRecord: 'QueryRecord',
        Service: 'Service',
        Strategy: 'Strategy',
        Style: 'Style',
        State: 'State',
        Target: 'Target',
        TemplateMethod: 'TemplateMethod',
        Type: 'Type',
        Unit: 'Unit'
    };
    var verbs = {
        Adapt: 'Adapter',
        Adjust: 'Adjuster',
        Attach: 'Attacher',
        Bind: 'Binder',
        Build: 'Builder',
        Calculate: 'Calculator',
        Coordinate: 'Coordinator',
        Contain: 'Container',
        Convert: 'Converter',
        Control: 'Controller',
        Connect: 'Connector',
        Collect: 'Collector',
        Configure: 'Configurator',
        Construct: 'Constructor',
        Compose: 'Composer',
        Command: 'Commander',
        Create: 'Creator',
        Debug: 'Debugger',
        Decorate: 'Decorator',
        Decide: 'Decider',
        Design: 'Designer',
        Delegate: 'Delegator',
        Destroy: 'Destroyer',
        Dispatch: 'Dispatcher',
        Dump: 'Dumper',
        Edit: 'Editor',
        Execute: 'Executor',
        Export: 'Exporter',
        Extract: 'Extractor',
        Factory: 'Factory',
        Filter: 'Filter',
        Format: 'Formatter',
        Generate: 'Generator',
        Handle: 'Handler',
        Initialize: 'Initializer',
        Identify: 'Identifier',
        Interpret: 'Interpreter',
        Insert: 'Inserter',
        Inform: 'Informer',
        Import: 'Importer',
        Iterate: 'Iterator',
        Listen: 'Listener',
        Limit: 'Limiter',
        Machine: 'Machine',
        Mark: 'Marker',
        Mediate: 'Mediator',
        Memento: 'Memento',
        Match: 'Matcher',
        Map: 'Mapper',
        Message: 'Messenger',
        Move: 'Mover',
        Observe: 'Observer',
        Parse: 'Parser',
        Present: 'Presenter',
        Provide: 'Provider',
        Prepare: 'Preparer',
        Print: 'Printer',
        Process: 'Processor',
        Receive: 'Receiver',
        Read: 'Reader',
        Record: 'Recorder',
        Remove: 'Remover',
        Resolve: 'Resolver',
        Sanitize: 'Sanitizer',
        Select: 'Selector',
        Schedule: 'Scheduler',
        Send: 'Sender',
        Serialize: 'Serializer',
        Sort: 'Sorter',
        Standardize: 'Standardizer',
        Support: 'Supporter',
        Synchronize: 'Synchronizer',
        Tokenize: 'Tokenizer',
        Trace: 'Tracer',
        Track: 'Tracker',
        Validate: 'Validator',
        View: 'Viewer',
        Visit: 'Visitor',
        Write: 'Writer'
    };


    function init() {
        buildHtml();
        registerEvents();
        selectRandom();
    };

    function buildHtml() {
        $(nounsUlSelector).html(buildListHtml(nouns));
        $(verbsUlSelector).html(buildListHtml(verbs));
    }

    function buildListHtml(map) {
        var html = '';
        Object.keys(map).sort().forEach(function (value) {
            html += '<li data-with-suffix="' + map[value] + '">' + value + '</li>';
        });
        return html;
    }

    function registerEvents() {
        $('.input-list').on('click', 'li', function () {
            selectItem($(this));
            return false;
        });

        $('#output').on('click', function () {
            selectElementContents(this);
        });
    }

    function selectItem($listItem) {
        $listItem.closest('ul').find('li').each(function () {
            $(this).removeClass(selectedClass);
        });
        $listItem.addClass(selectedClass);

        var value = '';
        if ($listItem.data('with-suffix')) {
            value += $listItem.data('with-suffix');
        } else {
            value += $listItem.text();
        }

        $listItem.closest('.input-list').data('input', value);
        $('#output').html(getOutput());
    }

    function getOutput() {
        return $('#nouns').data('input') + $('#verbs').data('input');
    }

    function selectElementContents(el) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    function selectRandom() {
        $('.input-list').each(function () {
            var inputs = $(this).find('li');
            var item = inputs[Math.floor(Math.random() * inputs.length)];
            selectItem($(item));
        });
    }

    return {
        init: init
    }
}();

$(function() {
    snaas.init();
});