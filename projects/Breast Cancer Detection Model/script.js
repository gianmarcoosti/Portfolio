// Interactive Visualization Scripts
document.addEventListener('DOMContentLoaded', function () {
    // Step Interaction
    const steps = document.querySelectorAll('.analysis-step');

    steps.forEach(step => {
        step.addEventListener('click', function (e) {
            if (e.target.closest('.visualization-container')) {
                // Handle visualization interaction
                const vizId = e.target.closest('.visualization-container').id;
                console.log(`Interacting with visualization: ${vizId}`);
                alert(`You clicked on: ${vizId}`); // Replace with actual interaction logic
            }
        });
    });

    // Tooltip Initialization
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mousemove', function (e) {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.left = `${e.pageX + 15}px`;
                tooltip.style.top = `${e.pageY + 15}px`;
            }
        });
    });

    // Add this to visualizations.js
    document.addEventListener('DOMContentLoaded', function () {
        // Add click events to Mermaid.js nodes
        const flowchartNodes = document.querySelectorAll('.mermaid .node');

        flowchartNodes.forEach(node => {
            node.addEventListener('click', function () {
                const nodeText = this.textContent.trim();
                alert(`You clicked on: ${nodeText}`); // Replace with custom logic
            });
        });
    });
    // Responsive Visualization Resizing
    function handleResize() {
        document.querySelectorAll('.visualization-container').forEach(container => {
            container.style.height = `${window.innerWidth > 768 ? '600px' : '400px'}`;
        });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    // Feature Importance Bar Hover Effects
    const featureBars = document.querySelectorAll('.feature-bar-fill');

    featureBars.forEach(bar => {
        bar.addEventListener('mouseenter', function () {
            this.style.opacity = '0.8';
        });

        bar.addEventListener('mouseleave', function () {
            this.style.opacity = '1';
        });
    });

    // Mermaid.js Flowchart Node Interaction (Optional)
    const flowchartNodes = document.querySelectorAll('.mermaid .node');

    flowchartNodes.forEach(node => {
        node.addEventListener('click', function () {
            const nodeText = this.textContent.trim();
            alert(`You clicked on: ${nodeText}`); // Replace with custom logic
        });
    });

    // Smooth Scrolling for Visualization Steps
    const stepLinks = document.querySelectorAll('.step-link');

    stepLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
