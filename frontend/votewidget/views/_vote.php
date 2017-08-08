<?php
/**
 * Created by PhpStorm.
 * User: mac
 * Date: 8/8/17
 * Time: 2:22 PM
 */
use yii\helpers\Html;

?>

<div>
    <h4><?= Html::encode($product->title) ?></h4>
    <div>
        <img src="<?= $product->image ?>">
    </div>
    <div>
        <a class="up-vote"><i class="fa fa-thumbs-o-up"></i></a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a class="down-vote"><i class="fa fa-thumbs-o-down"></i></a>
    </div>
</div>