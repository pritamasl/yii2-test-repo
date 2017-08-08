<?php

use frontend\votewidget\VoteWidget;

$fakedModel = (object)['title'=> 'A Product','image'=>'http://placehold.it/350x150'];

?>

<?= VoteWidget::widget(['model' => $fakedModel]);
