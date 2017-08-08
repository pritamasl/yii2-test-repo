<?php
/**
 * Created by PhpStorm.
 * User: mac
 * Date: 8/8/17
 * Time: 12:22 PM
 */
use yii\helpers\Html;

?>

<article class="list-item col-sm-12">
    <h3><?= $model['title'] ?></h3>
    <figure>
        <img src="<?= $model['image'] ?>" alt="<?= $model['title'] ?>">
    </figure>
</article>